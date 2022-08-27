import React from 'react'
import { MenuLanding, MenuContainer, Footer, CartContainer } from '../components/components'

const MenuPage = () => {
  return (
    <div className='pt-[67px] md:pt[67px] w-screen h-screen'>
      <MenuLanding />
      <MenuContainer />
      <CartContainer />
      <Footer />
    </div>
  )
}

export default MenuPage