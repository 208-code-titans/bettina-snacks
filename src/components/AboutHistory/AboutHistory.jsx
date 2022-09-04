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
    <div data-aos='fade-left'className='text-center mx-[200px] pb-[300px] pt-[150px] relative flex flex-col gap-9 '>
      <div className='absolute -top-40 -right-[13.1rem] '>
        <img className='w-[300px]' src={aboutdeco1} />
      </div>
      <h1 className='text-7xl uppercase'>His<span className='text-red-600'>tory</span></h1>

      <p className=' max-w-4xl text-center mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut vehicula erat.
        Nunc varius augue nisi, sed egestas mauris molestie at.
        Donec sed purus porta, auctor purus a, volutpat nulla.
        Pellentesque a finibus ligula, vitae sagittis nibh. In fermentum, urna ac vulputate convallis,
        dolor dui ullamcorper lacus, non aliquam libero eros a dolor. Mauris quis urna imperdiet,
        sagittis massa eget, malesuada neque. Vivamus non est nisi. Nullam congue odio vel accumsan
        rutrum. Ut lobortis quam et sem tristique accumsan. Nullam aliquet tincidunt libero et
        sollicitudin.
      </p>
      <div className='absolute -bottom-40 -left-[17.1rem] rotate-[260deg]'>
        <img className='w-[300px]' src={aboutdeco1} />
      </div>
    </div>
  )
}

export default AboutHistory