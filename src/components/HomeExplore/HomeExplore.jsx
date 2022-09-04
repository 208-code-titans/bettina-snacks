import { motion } from 'framer-motion'
import React from 'react'
import { LandingSubHeading, Button } from '../components'
import { exploreData } from '../../fixtures/menuData'
import { BsCartPlus } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomeExplore = () => {
	useEffect(() => { 
		Aos.init({duration:2000});
	Aos.refresh();
		},[]);
	return (
		<div data-aos='fade-right' className='p-8 md:p-16 flex flex-col'>
			<div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between'>
				<LandingSubHeading title={'Explore Our'} span={'Menu'} />
				<Button route={'/menu'} text={'Explore'} />
			</div>
			<div className='px-20 py-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10'>
				{exploreData &&
					exploreData.map((item) => (
						<div
							key={item.id}
							className='h-[320px] object-cover bg-contain bg-no-repeat rounded-3xl relative shadow-2xl'
							style={{ backgroundImage: `url(${item.img})` }}
						>
							<div className='bg-white inline-block absolute top-4 px-2 shadow-xl rounded-full right-3 font-bold text-red-500'>
								{item.price}
							</div>
							<div className='bg-white w-full absolute bottom-0 rounded-3xl py-8 px-4 drop-shadow-sm flex flex-col gap-2'>
								<div className='flex items-center w-full justify-between text-[.7rem] font-medium'>
									<p className='text-gray-700 text-lg font-bold'>
										{item.name}
									</p>
									<p className='bg-red-400 px-2 rounded-lg capitalize text-white'>
										{item.category}
									</p>
								</div>

								<div className='flex items-center justify-between'>
									<div className='text-cormorant w-[50%]'>
										<p className='text-xl'>
											<span className='text-red-400'>
												{item.tags}
											</span>{' '}
										</p>
									</div>
									
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default HomeExplore
