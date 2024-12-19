import React from 'react'
import bannerImg from"../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 items-center py-16 justify-between'>
      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-3xl mb-7 font-medium'>New Releases This Week.</h1>
        <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>
        <button className='btn-primary'>Subscribe</button>
      </div>
      <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg}/>

      </div>
    </div>
  )
}

export default Banner
