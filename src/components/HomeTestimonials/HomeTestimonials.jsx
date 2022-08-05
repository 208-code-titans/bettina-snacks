import React, { useState } from 'react'
import { reviews } from '../../fixtures/data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { homeTestimonials } from '../images'

const HomeTestimonials = () => {
	const [index, setIndex] = useState(0)
	const { name, job, image, text } = reviews[index]
	const checkNumber = (number) => {
		if (number > reviews.length - 1) {
			return 0
		}
		if (number < 0) {
			return reviews.length - 1
		}
		return number
	}
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex)
		})
	}
	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex)
		})
	}
	return (
		<div className='w-screen h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: `url(${homeTestimonials})` }}>
			<div className='bg-gray-50 w-[80vw] max-w-[620px] shadow-xl rounded-3xl py-6 px-8 text-center'>
				<div className='relative w-150 h-150 rounded-full mb-6 my-0 mx-auto before:w-full before:h-full before:bg-red-400 before:absolute before:-top-1 before:-right-2 before:rounded-full '>
					<img
						src={image}
						alt={name}
						className='person-img w-full block h-full rounded-full relative object-cover'
					/>
					<span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full bg-red-400 text-white translate-y-[25%]'>
						<FaQuoteRight />
					</span>
				</div>
				<p className='mb-1 capitalize font-semibold tracking-wide text-cormorant text-2xl'>
					{name}
				</p>
				<p className='mb-2 uppercase text-red-400 text-sm'>{job}</p>
				<p className='text-sm text-gray-600 mb-4'>{text}</p>
				<div className='button-container flex items-center justify-center gap-20'>
					<motion.button
						whileTap={{ scale: 0.7 }}
						className='prev-btn bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear h-10 w-10 rounded-full flex items-center justify-center text-white cursor-pointer text-xl '
						onClick={prevPerson}
					>
						<FaChevronLeft />
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.7 }}
						className='next-btn bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear h-10 w-10 rounded-full flex items-center justify-center text-white cursor-pointer text-xl '
						onClick={nextPerson}
					>
						<FaChevronRight />
					</motion.button>
				</div>
			</div>
		</div>
	)
}

export default HomeTestimonials
