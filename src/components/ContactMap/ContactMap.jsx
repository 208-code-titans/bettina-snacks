import React from 'react'
import { LandingSubHeading } from '../components'

const ContactMap = () => {
	return (
		<div className='mt-8 py-10 w-full'>
			<div className='mx-auto max-w-[90%] md:max-w-[86%] lg:max-w-6xl '>
				<p className='text-center text-sm text-gray-500 mb-4 font-semibold'>
					We are located beside <span className='text-red-400 italic'>Novelty Supermarket</span>
        </p>
        <LandingSubHeading title={'Locate'} span={'Us'} />
				<div className='w-screen lg:max-w-[58%] mx-auto'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.9455436626217!2d-0.19834957524668664!3d5.611842019311527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa75f9e1c17818549!2sNovelty%20Supermarket%20Dzorwulu!5e0!3m2!1sen!2sgh!4v1661786267855!5m2!1sen!2sgh'
            className='border-0 w-full h-[450px]'
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default ContactMap
