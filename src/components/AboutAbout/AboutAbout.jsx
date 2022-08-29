import React from 'react'
import { aboutdeco2, bg } from "../images"


const AboutAbout = () => {
  return (
    <div className='text-center mb-8 border-none h-[80vh] flex items-center justify-center text-white bg-cover' style={{ backgroundImage: `url(${bg})` }}>
      <div className=' mx-auto flex flex-col gap-9'>
        <h1 className='text-7xl uppercase'>ABO<span className='text-red-600'>UT</span></h1>

        <p className='max-w-4xl text-center mx-auto '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In ut vehicula erat. Nunc varius augue nisi, sed egestas mauris molestie at.
          Donec sed purus porta, auctor purus a, volutpat nulla. Pellentesque a finibus ligula, vitae sagittis nibh.
          In fermentum, urna ac vulputate convallis, dolor dui ullamcorper lacus, non aliquam libero eros a dolor.
          Mauris quis urna imperdiet, sagittis massa eget, malesuada neque. Vivamus non est nisi.
          Nullam congue odio vel accumsan rutrum. Ut lobortis quam et sem tristique accumsan.
          Nullam aliquet tincidunt libero et sollicitudin.
        </p>
      </div>
    </div>
  )
}

export default AboutAbout