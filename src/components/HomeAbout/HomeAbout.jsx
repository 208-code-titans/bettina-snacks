import React from 'react'
import { Button, LandingSubHeading } from '../components'
import { homeAbout } from '../images'

const HomeAbout = () => {
	return (
		<div className='bg-gradient-to-b from-white to-overlay pt-12 '>
			<div className='hidden md:flex w-full h-full items-center gap-12'>
				<div className='w-[50%]'>
					<img src={homeAbout} alt='' />
				</div>
				<div className='w-[50%]'>
					<div className='w-full gap-4 flex flex-col py-8 px-12'>
						<LandingSubHeading
							title='About Bettina'
							span='Snacks'
							subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur minima et, ex dicta corporis rem in eaque porro? Explicabo inventore repellendus sapiente asperiores delectus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur minima et, ex dicta corporis rem in eaque porro? Explicabo inventore repellendus sapiente asperiores delectus nihil.'
						/>
						<Button route='/about' text='Learn More' />
					</div>
				</div>
			</div>
			<div className='flex md:hidden w-full h-full items-center flex-col-reverse justify-between gap-4 bg-white pt-32'>
				<div className='w-full'>
					<img src={homeAbout} alt='' />
				</div>
				<div className='w-full '>
					<div className='w-full gap-4 flex flex-col py-8 px-4'>
						<LandingSubHeading
							title='About Bettina'
							span='Snacks'
							subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur minima et, ex dicta corporis rem in eaque porro? Explicabo inventore repellendus sapiente asperiores delectus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur minima et, ex dicta corporis rem in eaque porro? Explicabo inventore repellendus sapiente asperiores delectus nihil.'
						/>
						<Button route='/about' text='Read More' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAbout
