const Footer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 '>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Inventors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real website</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>PinazzaFamily</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Pinazza React</p>
        <p>Presents</p>
        <p>Zero to Full Stack</p>
        <p>Go My Code</p>
        <p>Join Now</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>This is Algeria</p>
        <p>For the Win</p>
      </div>
    </section>
  )
}

export default Footer
