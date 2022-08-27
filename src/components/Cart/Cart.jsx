import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { useEffect } from 'react'
let items = []

const Cart = ({ item, setFlag, flag }) => {
	const [qty, setQty] = useState(item.qty)
	// const [ items, setItems] = useState([])
	const [{ cartItems }, dispatch] = useStateValue()
	const cartDispatch = () => {
		localStorage.setItem('cartItems', JSON.stringify(items))
		dispatch({
			type: actionType.SET_CART_ITEMS,
			cartItems: items,
		})
	}

	const updateQty = (action, id) => {
		if (action === 'add') {
			setQty(qty + 1)
			cartItems.map((item) => {
				if (item.id === id) {
					item.qty += 1
					setFlag(flag + 1)
				}
			})

			cartDispatch()
		} else {
			if (qty == 1) {
				items = cartItems.filter((item) => item.id !== id)
				setFlag(flag + 1)
				cartDispatch()
			} else {
				setQty(qty - 1)
				cartItems.map((item) => {
					if (item.id === id) {
						item.qty -= 1
						setFlag(flag + 1)
					}
				})

				cartDispatch()
			}
		}
	}

	useEffect(() => {
		items = cartItems
	}, [qty, items])

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
					GHC{item.price * qty}
				</p>
			</div>
			<div className='group flex flex-col items-center justify-center   cursor-pointer py-1'>
				<motion.button
					whileTap={{ scale: 0.75 }}
					className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white disabled:opacity-50'
					onClick={() => updateQty('remove', item.id)}
				>
					<BiMinus />
				</motion.button>
				<p className='text-lg'>{qty}</p>
				<motion.button
					whileTap={{ scale: 0.75 }}
					className='text-lg bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear rounded-full p-1 text-white'
					onClick={() => updateQty('add', item.id)}
				>
					<BiPlus />
				</motion.button>
			</div>
		</div>
	)
}

export default Cart
