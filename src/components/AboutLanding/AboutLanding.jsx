import React from 'react'
import { aboutLanding } from '../images'
import { LandingSubHeading } from '../components'

const AboutLanding = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row pt-12 h-screen '>
			<div className=' w-full lg:w-[60%] md:h-full flex items-center justify-center'>
				<img src={aboutLanding} alt='' className='w-full  object-cover' />
			</div>

			<div className='w-full lg:w-[40%]  p-8 flex items-center justify-center'>
				<LandingSubHeading
					title={'About Bettina'}
					span={'Snacks'}
					subtitle={
						'We present the history and all need to know about Bettina Snacks. Since the 1900s till today.'
					}
				/>
			</div>
		</div>
	)
}

export default AboutLanding
