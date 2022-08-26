import React from 'react'
import { contactLanding } from '../images'

const ContactLanding = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: `url(${contactLanding})`} }>
      <div className='bg-black/[0.7] w-[80vw] max-w-[620px] shadow-xl  py-40 px-30 text-center '>
        <div className='text-5xl text-cormorant text-white'>
          <p>GET IN TOUCH WITH <br /> US!</p>

        </div>
         

      </div>
    </div>
  )
}

export default ContactLanding