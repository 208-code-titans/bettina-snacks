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
						'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim officiis fugit laboriosam molestias, illo id itaque voluptatem animi quisquam perspiciatis! Ad eveniet ut sunt aspernatur quidem ducimus in, delectus similique?'
					}
				/>
			</div>
		</div>
	)
}

export default AboutLanding
