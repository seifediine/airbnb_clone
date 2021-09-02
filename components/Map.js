import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({})

  // Transform searchResults object into { latitude: xx.xxxxxx, longitude: xx.xxxxxx }
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  // The latitude and longitude of the center of all coordinates
  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      {...viewport}
      width='100%'
      height='100%'
      mapStyle='mapbox://styles/pinazza/ckt2xhy8f2fm918s06r0yl7zz'
      mapboxApiAccessToken={process.env.mapboxApiToken}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show when we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
