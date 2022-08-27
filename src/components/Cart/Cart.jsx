import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'


const Cart = ({item}) => {
	return (
		<div
			key={item.id}
			className='w-full p-1 px-2 rounded-3xl bg-white flex items-center justify-between gap-2'
		>
			<img
				src={item.photo}
				className='w-20 h-20  rounded-full object-cover p-[2px] border border-red-500 cursor-pointer'
				alt=''
			/>
			<div className='flex flex-col gap-2 justify-center items-center'>
				<p className='text-sm'>
					{' '}
					{item.name} - {item.tag}
				</p>
				<p className='text-lg block text-gray-700 font-semibold'>
					GHC{item.price}
				</p>
			</div>
			<div className='group flex flex-col items-center justify-center   cursor-pointer py-1'>
				<motion.div
					whileTap={{ scale: 0.75 }}
					className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white'
				>
					<BiMinus />
				</motion.div>
				<p className='text-lg'>{item.qty}</p>
				<motion.div
					whileTap={{ scale: 0.75 }}
					className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white'
				>
					<BiPlus />
				</motion.div>
			</div>
		</div>
	)
}

export default Cart
