import React from 'react'
import { AboutLanding, AboutHistory, AboutAbout, Footer} from '../components/components'

const AboutPage = () => {
  return (
    <div className='pt-[67px] md:pt[67px] w-screen h-screen'>
      <AboutLanding />
      <AboutHistory />
      <AboutAbout />
      <Footer />
    </div>
  )
}

export default AboutPage