import React from 'react'
import { aboutdeco1 } from '../images'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutHistory = () => {
  useEffect(() => { 
    Aos.init({duration:2000});
Aos.refresh();
    },[]);
  return (
    <div data-aos='fade-left'className='text-center px-10 py-16 max-w-5xl  mx-auto relative flex flex-col gap-9 '>
      {/* <div className='absolute -top-40 -right-[13.1rem] '>
      <img className='w-[100px] md:w-[300px]'alt = 'decorative strawberries' src={aboutdeco1} />
      </div> */}
      <h1 className='text-7xl uppercase'>His<span className='text-red-600'>tory</span></h1>

      <p className='w-full text-center'>
      Bettina's Snacks is a family business whose name was originated from the mother of the current manager, 
      Bettina. It was once a bread bakery established in the 1970's in Kanda called Bettina's Bakery and 
      was renamed to Bettina's Snacks in the 1990's in Adabraka. 
      Bettina's Snacks encourages healthy living and utilizes good manufacturing processes. 
      Therefore, our target customers are the young and active since they are able to burn fats easily. 
      Regardless, our products are healthy for all ages. It has been able to supply to many companies and 
      institutions such as Barclays, Kasapreko, Ghana International School, Lincoln International School, 
      Everpure, etc.  
      </p>
      {/* <div className='absolute -bottom-40 -left-[17.1rem] rotate-[260deg]'>
      <img className='w-[100px] md:w-[300px]' alt = 'decorative strawberries' src={aboutdeco1} />
      </div> */}
    </div>
  )
}

export default AboutHistory