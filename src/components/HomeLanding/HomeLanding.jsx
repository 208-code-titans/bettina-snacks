import React from 'react'
import { homeLanding } from '../images'
import { Button, LandingSubHeading } from '../components'

const HomeLanding = () => {
	return (
		<div className='text-black z-50 h-full flex items-center '>
			<div className='hidden md:flex w-full h-full items-center justify-between gap-4'>
				<div className='w-[50%] relative mx-12 gap-4 flex flex-col'>
					<LandingSubHeading
						title='The Pastries With A'
						span='Difference'
						subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur minima et, ex dicta corporis rem in eaque porro? Explicabo inventore repellendus sapiente asperiores delectus nihil.'
					/>
					<Button route='/menu' text='Order Now' />
				</div>
				<div className='absolute right-0 w-[500px] 2xl:w-[600px]'>
					<img src={homeLanding} alt='' className='w-[] ' />
				</div>
			</div>
			<div className='flex md:hidden w-full h-full justify-between items-center'></div>
		</div>
	)
}

export default HomeLanding
