import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { MdRefresh } from 'react-icons/md'
import { motion } from 'framer-motion'

const CartContainer = () => {
	return (
		<div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[100] '>
			<div className='w-full flex items-center justify-between p-4 cursor-pointer border-b border-red-200 shadow-lg '>
				<motion.div whileTap={{ scale: 0.8 }}>
					<IoArrowBackCircleOutline className='text-3xl text-red-400 font-semibold' />
                </motion.div>
                <div>
                    <h3 className='font-bold text-3xl text-red-500'>Cart</h3>
                </div>
                <div>
                    <motion.p whileTap={{ scale: 0.8 }} className='flex items-center gap-2 p-1 px-2 bg-red-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer test-base'>
                        Clear <MdRefresh />
                    </motion.p>
                </div>


            </div>
            <div className='w-full h-full rounded-t-[2rem] flex flex-col'>
                 
            </div>
		</div>
	)
}

export default CartContainer
