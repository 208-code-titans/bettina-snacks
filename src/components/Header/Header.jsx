import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	HOME,
	ABOUT,
	SIGN_IN,
	SIGN_UP,
	MENU,
	CONTACT,
} from '../../constants/routes'
import { person } from '../images'
import { motion } from 'framer-motion'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdLogin } from 'react-icons/md'
import { BiUserPlus } from 'react-icons/bi'

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)


    const showMenu = (e) => {
        setIsMenu(menu => !menu)
    }

	return (
		<header className='fixed z-50 w-screen p-3 px-12 text-red-500 bg-white border-2 border-b drop-shadow-md'>
			{/* For Desktop and Tablet */}
			<div className='hidden md:flex w-full h-full items-center justify-between'>
				<div>
					<motion.h1
						className='text-3xl '
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
					>
						Bettina Snacks
					</motion.h1>
				</div>
				<div className='flex items-center gap-8'>
					<motion.ul
						className='flex items-center gap-8'
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
					>
						<Link to={HOME}>
							<motion.li
								whileTap={{ scale: 0.8 }}
								className='text-cormorant text-xl cursor-pointer hover:text-red-600'
							>
								{' '}
								Home{' '}
							</motion.li>
						</Link>
						<Link to={ABOUT}>
							<motion.li
								whileTap={{ scale: 0.8 }}
								className='text-cormorant text-xl cursor-pointer hover:text-red-600'
							>
								{' '}
								About{' '}
							</motion.li>
						</Link>
						<Link to={MENU}>
							<motion.li
								whileTap={{ scale: 0.8 }}
								className='text-cormorant text-xl cursor-pointer hover:text-red-600'
							>
								{' '}
								Menu{' '}
							</motion.li>
						</Link>
						<Link to={CONTACT}>
							<motion.li
								whileTap={{ scale: 0.8 }}
								className='text-cormorant text-xl cursor-pointer hover:text-red-600'
							>
								{' '}
								Contact{' '}
							</motion.li>
						</Link>
					</motion.ul>
				</div>
				<motion.div
					className='flex gap-8 items-center justify-center'
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 200 }}
				>
					<div>
						<motion.img
							src={person}
							alt='user'
							whileTap={{ scale: 0.6 }}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer object-cover rounded-full'
                            onClick={showMenu}
                        />
                        {
                            isMenu && (
                                !person ? (
                                 console.log("no user")
                                ) : (
                                    <motion.div
									initial={{ opacity: 0, scale: 0.6 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.6 }}
									className='w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-14 right-28 text-black z-50'
								>
									

									<Link to={SIGN_UP}
										className='cursor-pointer px-4 py-2 hover:bg-gray-100 hover:border-b-2  hover:border-red-400  duration-100 transition-all ease-in-out flex items-center gap-3 text-base'
									>
										<BiUserPlus className='text-xl text-red-500' />
										Sign Up
									</Link>
									<Link to={SIGN_IN}
										className='cursor-pointer px-4 py-2 hover:bg-gray-100 hover:border-b-2  hover:border-red-400 hover:rounded-b-lg duration-100 transition-all ease-in-out flex items-center gap-3 text-base'
									>
										<MdLogin className='text-xl text-red-500' />
										Log In
									</Link>
								</motion.div>   
                                )
                                
                            )
                        }
					</div>
					<motion.div
						className='relative flex items-center justify-center'
						whileTap={{ scale: 0.6 }}
					>
						<AiOutlineShoppingCart className='text-black text-3xl cursor-pointer' />
						<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center'>
							<p className='text-xs text-white font-semibold'>
								2
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
			{/* For mobile screens */}
			<div className='flex md:hidden w-full h-full'>Mobile Screens</div>
		</header>
	)
}

export default Header
