import React from 'react'
import { bg } from "../images"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AboutAbout = () => {
  useEffect(() => { 
		Aos.init({duration:2000});
	Aos.refresh();
		},[]);
  
  return (
    <div data-aos='fade-right' className='text-center mb-8 border-none h-[80vh] flex items-center justify-center text-white bg-cover' style={{ backgroundImage: `url(${bg})` }}>
      <div className=' mx-auto flex flex-col gap-9'>
        <h1 className='text-7xl uppercase'>ABO<span className='text-red-600'>UT</span></h1>

        <p className='max-w-4xl text-center mx-auto '>
        Bettina Snacks is an all Ghanaian Bakery which offers high quality snacks with the finest ingredients. 
        Since the 1970s, Bettina snacks has delivered the best of the best, which was owned by Bettina, who then passed
        it on the her daughter, the current manager. The young and older generation are our focus since our products are 
        nourished with their health in mind. Ingredients are carefully combined in order to minimize the risk any ailments
        as customers enjoy their rich snacks.  
        </p>
      </div>
    </div>
  )
}

export default AboutAbout