import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { MdRefresh } from 'react-icons/md'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { quiche } from '../images'

const CartContainer = () => {
    const [{ cartShow }, dispatch] = useStateValue()
    
    const showCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: !cartShow
		})
	}

	return (
		<div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[100] '>
			<div className='w-full flex items-center justify-between p-4 cursor-pointer '>
				<motion.div whileTap={{ scale: 0.8 }} onClick={showCart}>
					<IoArrowBackCircleOutline className='text-3xl text-red-400 font-semibold' />
				</motion.div>
				<div>
					<h3 className='font-bold text-3xl text-red-500'>Cart</h3>
				</div>
				<div>
					<motion.p
						whileTap={{ scale: 0.8 }}
						className='flex items-center gap-2 p-1 px-2 bg-red-100  rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer test-base'
					>
						Clear <MdRefresh />
					</motion.p>
				</div>
			</div>
			<div className='w-full h-full rounded-t-[2rem] flex flex-col bg-gray-100'>
				<div className='w-full h-[85%] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
					{/* Each cart item */}
					<div className='w-full p-1 px-2 rounded-3xl bg-white flex items-center justify-between gap-2'>
						<img
							src={quiche}
							className='w-20 h-20  rounded-full object-contain p-[2px] border border-red-500 cursor-pointer'
							alt=''
						/>
						<div className='flex flex-col gap-2 justify-center items-center'>
							<p className='text-sm'> Quiche</p>
							<p className='text-lg block text-gray-700 font-semibold'>
								GHC80
							</p>
						</div>
						<div className='group flex flex-col items-center justify-center   cursor-pointer py-1'>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white'
							>
								<BiMinus />
							</motion.div>
							<p className='text-lg'>4</p>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white'
							>
								<BiPlus />
							</motion.div>
						</div>
					</div>
				</div>

				{/* Total section */}
				<div className='w-full flex-1 bg-white rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 shadow-md gap-2 '>
				
					<div className='flex items-center justify-between w-full px-12 py-2'>
						<div className='flex items-center'>
							<p className='text-gray-500 text-sm mr-2 font-semibold'>Subtotal: </p>
							<p className='text-base font-semibold'> 80</p>
						</div>
						<div className='flex items-center'>
							<p className='text-gray-500 text-sm mr-2 font-semibold'>Taxes:</p>
							<p className='text-base font-semibold'> 1</p>
						</div>
					</div>
					<div className='flex items-center justify-between w-full mb-4'>
						<div className='flex flex-col items-center'>
							<p className='text-gray-500 font-semibold'>Total</p>
							<p className='text-2xl font-semibold'>
								{' '}
								<span className='text-sm'>GHC</span> 81
							</p>
						</div>
						<motion.button
							whileTap={{ scale: 0.8 }}
							type='button'
							className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear  px-7 py-2 rounded-full text-white '
						>
							Checkout
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartContainer