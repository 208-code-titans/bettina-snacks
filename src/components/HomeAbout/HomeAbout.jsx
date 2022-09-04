import React from 'react'
import { Button, LandingSubHeading } from '../components'
import { homeAbout } from '../images'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomeAbout = () => {
	useEffect(() => { 
		Aos.init({duration:2000});
	Aos.refresh();
		},[]);
	return (
		<div data-aos='fade-left' className='bg-gradient-to-b from-white to-overlay pt-12 '>
			<div className='hidden md:flex w-full h-full items-center gap-12'>
				<div className='w-[50%]'>
					<img src={homeAbout} alt='' />
				</div>
				<div className='w-[50%]'>
					<div className='w-full gap-4 flex flex-col py-8 px-12'>
						<LandingSubHeading
							title='About Bettina'
							span='Snacks'
							subtitle='Bettina Snacks is an all Ghanaian Bakery which offers high quality snacks with the finest ingredients. Since the 1970s, Bettina snacks has delivered 
							          the best of the best, which was owned by Bettina, who then passed it on the her daughter, the current manager. '
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
							subtitle='Bettina Snacks is an all Ghanaian Bakery which offers high quality snacks with the finest ingredients. Since the 1970s, Bettina snacks has delivered 
							          the best of the best, which was owned by Bettina, who then passed it on the her daughter, the current manager.'
						/>
						<Button route='/about' text='Read More' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAbout
