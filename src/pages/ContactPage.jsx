import React from 'react'
import { ContactForm, ContactLanding, ContactMap, ContactQuote, Footer } from '../components/components'

const ContactPage = () => {
  return (
    <div className='pt-[67px] md:pt[67px] w-screen h-screen overflow-x-hidden'>
      <ContactLanding />
      <ContactForm />
      <ContactMap />
      <ContactQuote />
      <Footer />
    </div>
  )
}

export default ContactPage