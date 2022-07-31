import React from 'react'
import { HomeLanding, HomeAbout, HomeContact, HomeExplore, HomeTestimonials } from '../components/components'

const HomePage = () => {
  return (
    <div className='pt-[67px] md:pt[67px] w-screen h-screen'>
      <HomeLanding />
      <HomeAbout />
      <HomeExplore />
      <HomeTestimonials />
      <HomeContact />

    </div>
  )
}

export default HomePage