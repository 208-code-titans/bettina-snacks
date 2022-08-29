import React from 'react'
import { BsEnvelope, BsWhatsapp, BsTelegram } from 'react-icons/bs'
import { useRef } from 'react'
import { LandingSubHeading } from '../components'
import { contactData } from '../../fixtures/data'

const ContactForm = () => {
	const form = useRef()

	const sendEmail = () => {}

	return (
		<div className='w-screen h-screen '>
			<div className='mt-32 w-full'>
				<p className='text-center text-sm text-gray-500 mb-4 font-semibold'>
					Get in touch with us
				</p>
				<LandingSubHeading title={'Contact '} span={'Us'} />

				<div className='mx-auto max-w-[90%] md:max-w-[86%] lg:max-w-6xl lg:w-[58%] grid md:grid-cols-[30%,58%] gap-[12%] mt-4 '>
					<div className='flex flex-col gap-[1.2rem] '>
						{contactData &&
							contactData.map((item) => (
								<div className=' p-[1.2rem] rounded-3xl text-center cursor-pointer shadow-md border border-red-500 w-full flex flex-col gap-2 items-center justify-center'>
									{item.icon}
									<p className='font-semibold text-base'>
										{item.title}
									</p>
									<p className='font-medium text-sm'>
										{item.handle}
									</p>
									<a href={item.link} className='text-red-500'>
										Send a message
									</a>
								</div>
							))}
					</div>
          <div className=''>
            
          </div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
