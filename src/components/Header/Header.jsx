import React from 'react'
import { user } from '../images'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
	return (
		<header className='fixed z-50 w-screen p-6 px-16 text-red-500 bg-white border-2 border-b drop-shadow-md'>
			{/* For Desktop and Tablet */}
			<div className='hidden md:flex w-full h-full items-center justify-between'>
				<div>
					<h1 className='text-3xl '>Bettina Snacks</h1>
				</div>
				<div className='flex items-center gap-8'>
					<ul className='flex items-center gap-8'>
						<li className='text-cormorant text-xl'> Home </li>
						<li className='text-cormorant text-xl'> About </li>
						<li className='text-cormorant text-xl'> Menu </li>
						<li className='text-cormorant text-xl'> Contact </li>
					</ul>
				</div>
				<div className='flex gap-8 items-center justify-center'>
					<div>
						<img
							src={user}
							alt='user'
							className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer object-cover rounded-full'
						/>
                    </div>
                    <div>
                        <AiOutlineShoppingCart className='text-black text-3xl' />
                    </div>
				</div>
			</div>
			{/* For mobile screens */}
			<div className='flex md:hidden w-full h-full'>Mobile Screens</div>
		</header>
	)
}

export default Header
