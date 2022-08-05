import React from 'react'
import { Link } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-gray-50 text-black border-t-2 border-red-50 shadow-sm'>
			<div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
				<div className=' '>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-center sm:px-8 px-5 py-16'>
						<div className='flex flex-col gap-4'>
							<h1 className='text-3xl text-red-400 tracking-wide'>
								Company
							</h1>
							<div className='flex gap-4 justify-center font-semibold uppercase'>
								<Link to={'/'} className='hover:text-red-500'>
									Home
								</Link>
								|
								<Link
									to={'/about'}
									className='hover:text-red-500'
								>
									About
								</Link>
								|
								<Link
									to={'/menu'}
									className='hover:text-red-500'
								>
									Menu
								</Link>
								|
								<Link
									to={'/contact'}
									className='hover:text-red-500'
								>
									Contact
								</Link>
							</div>
							<div className='flex flex-col gap-4'>
								<p>For Deliveries, contact +233 *** *** ***</p>
								<p>
									For International Deliveries, contact +91
									*** *** ***
								</p>
							</div>
						</div>
						<div className='flex flex-col gap-4 justify-center'>
							<h1 className='text-5xl text-cormorant text-red-500'>
								Bettina Snacks
              </h1>
              <div className='w-full h-[2px] block bg-gradient-to-r from-transparent via-red-500 to-transparent' ></div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean non erat ac erat
								ultrices vehicula
							</p>
							<div className='flex items-center justify-center gap-3'>
								<BsWhatsapp className='cursor-pointer text-2xl hover:text-red-500 ' />
								<FaInstagram className='cursor-pointer text-2xl hover:text-red-500 ' />
								<FaFacebookF className='cursor-pointer text-2xl hover:text-red-500 ' />
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<h1 className='font-semibold text-red-400 text-3xl tracking-wide'>
								Working Hours
							</h1>
							<div className='flex flex-col gap-4'>
								<div>
									<p className='font-medium'>Monday-Friday</p>
									<p>08:00am - 05:00pm</p>
								</div>
								<div>
									<p className='font-medium'>
										Saturday - Sundays
									</p>
									<p>07:00am - 11:00pm</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full items-center justify-center text-cormorant'>
				Built By Code Titans
			</div>
		</footer>
	)
}

export default Footer
