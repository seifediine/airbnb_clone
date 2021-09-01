import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

const Search = () => {
  const router = useRouter()

  const { location, startDate, endDate, guestNumber } = router.query
  console.log(startDate)

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestNumber} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays between {range} for {guestNumber} Guests
          </p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='filter-button'>Cancellation Flexibility</p>
            <p className='filter-button'>Type of Place</p>
            <p className='filter-button'>Price</p>
            <p className='filter-button'>Rooms & Beds</p>
            <p className='filter-button'>More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search
