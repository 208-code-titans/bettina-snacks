import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsChatText } from 'react-icons/bs'
import { FiAtSign } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import { LandingSubHeading } from '../components'
import { contactData } from '../../fixtures/data'
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import Aos from 'aos'
import 'aos/dist/aos.css';


const ContactForm = () => {  
	useEffect(() => { 
		Aos.init({duration:2000});
		Aos.refresh();
		},[]);
	
	const form = useRef()
	
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_tu9t2b1', 'template_yu38vwc', form.current, 'FdKD7gINyfoLX8RoM')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  (e).target.reset();
	  };
	  const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };
	  
	
	
	return (
		<div  className='w-screen min-h-max mb-32 lg:mb-0 '>
			<div className='mt-32 w-full'>
				<p className='text-center text-sm text-gray-500 mb-4 font-semibold'>
					Get in touch with us
				</p>
				<LandingSubHeading title={'Contact '} span={'Us'} />

				<div  className='mx-auto max-w-[90%] md:max-w-[86%] lg:max-w-6xl lg:w-[58%] grid md:grid-cols-[30%,58%] gap-[12%] mt-4 '>
					<div className='flex flex-col gap-[1.2rem] '>
						{contactData &&
							contactData.map((item) => (
								<div  className=' p-[1.2rem] rounded-3xl text-center cursor-pointer shadow-md border border-red-500 w-full flex flex-col gap-2 items-center justify-center'>
									{item.icon}
									<p className='font-semibold text-base'>
										{item.title}
									</p>
									<p className='font-medium text-sm'>
										{item.handle}
									</p>
									<a
										href={item.link}
										className='text-red-500'
									>
										Send a message
									</a>
								</div>
							))}
					</div>
					<form
						ref={form}
						onSubmit={sendEmail}
						className='flex flex-col gap-6'
					>
						<div className='relative '>
							<BiUser className='inputIcon' />
							<input
								type='text'
								required
								name='user_name'
								placeholder='Enter your name'
								className='contactInput'
							/>
						</div>
						<div className='relative'>
							<FiAtSign className='inputIcon' />
							<input
								type='email'
								name='user_email'
								placeholder='Enter your email'
								className='contactInput'
							/>
						</div>
						<div className='relative'>
							<BsChatText className='inputIcon top-2' />
							<textarea
								name='user_message'
								rows='7'
								className='contactInput'
								placeholder='Enter your message'
							></textarea>
						</div>

						<button
							type='submit'
							className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear block px-9 py-4 rounded-full text-white w-max'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
