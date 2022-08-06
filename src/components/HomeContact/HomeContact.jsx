import React from 'react'
import { Button,LandingSubHeading } from '../components'
import { homeContact } from '../images'


const HomeContact = () => {
  return (
    <div className='bg-gradient-to-b from-white to-overlay pt-12 '>
			<div className='hidden md:flex w-full h-full items-center gap-12'>
				<div className='w-[50%]'>
					<img src={homeContact} alt='' />
				</div>
				<div className='w-[50%]'>
					<div className='w-full gap-4 flex flex-col py-8 px-12'>
						<LandingSubHeading
							title='Contact'
							span='Us'
							subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur.'
						/>
            <div>
          <p>TELEPHONE: +233 *** *** ***</p>
					<p>EMAIL: BettinaBakery@gmail.com</p>
          </div> 
						<Button route='/contact' text='VIEW MORE' />
					</div>
				</div>
			</div>
			<div className='flex md:hidden w-full h-full items-center flex-col-reverse justify-between gap-4 bg-white pt-32'>
				<div className='w-full'>
					<img src={homeContact} alt='' />
				</div>
				<div className='w-full '>
					<div className='w-full gap-4 flex flex-col py-8 px-4'>
						<LandingSubHeading
							title='CONTACT'
							span ='US'
							subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic aperiam deserunt, sed consequuntur.'
						/>
          <div>
          <p>TELEPHONE: +233 *** *** ***</p>
					<p>EMAIL: BettinaBakery@gmail.com</p>
          </div>  
						<Button route='/contact' text='VIEW MORE'/>
					</div>
				</div>
			</div>
		</div>
  )
}

export default HomeContact