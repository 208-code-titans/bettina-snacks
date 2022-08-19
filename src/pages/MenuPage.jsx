import React from 'react'
import { MenuLanding, MenuContainer, Footer } from '../components/components'

const MenuPage = () => {
  return (
    <div className='pt-[67px] md:pt[67px] w-screen h-screen'>
      <MenuLanding />
      <MenuContainer />
      <Footer />
    </div>
  )
}

export default MenuPage