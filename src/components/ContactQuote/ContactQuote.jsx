import React from 'react'
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const cardData = [
  {
    desc: "It's all about a balancing act between time, temperature and  ingredients: That's the art of baking"
  },
  {
    desc: "The secret ingredient in baking is always love."
  },
  {
    desc: "Baking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart."
  },
  {
    desc: "We can't all be bakers or chefs. Many of us have modest ambitions. But we can all buy a piece of the pie"
  },
]


const ContactQuote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    swipeToSlide: true,
    arrows: false,
    fade: true,

  };
 

  return (

    <div className='w-screen h-[70vh] bg-center shadow-xl flex items-center justify-center bg-cover bg-gradient-to-br from-red-500 via-pink-700 to-red-500 px-4 text-center'>
      <div className='text-2xl text-center text-white w-full lg:max-w-2xl '  >


        <Slider {...settings}>
          {
            cardData.map((item, index) => (
              <div>
                <p className='text-center'>{item.desc}</p>
              </div>
            ))}



        </Slider>

      </div>
    </div>


  )
}

export default ContactQuote