import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { MdRefresh } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { quiche } from '../images'
import { Cart } from '../components'
import { useState, useEffect } from 'react'

const CartContainer = () => {
	const [{ cartShow, cartItems }, dispatch] = useStateValue()
	const [flag, setFlag] = useState(1)
	const [tot, setTot] = useState(0)

	const showCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: !cartShow,
		})
    }

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
          return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
      }, [tot, flag]);
    
    const clearCart = () => {
        dispatch({
          type: actionType.SET_CART_ITEMS,
          cartItems: [],
        });
    
        localStorage.setItem("cartItems", JSON.stringify([]));
      };

	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[100] '
		>
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
                        onClick={clearCart}
					>
						Clear <MdRefresh />
					</motion.p>
				</div>
			</div>
			{cartItems && cartItems.length > 0 ? (
				<div className='w-full h-full rounded-t-[2rem] flex flex-col bg-gray-100'>
					<div className='w-full h-[80%] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none relative'>
						{/* Each cart item */}
						{cartItems &&
							cartItems.length > 0 &&
							cartItems.map((item) => (
								<Cart item={item} key={item.id} setFlag={setFlag} flag={flag} />
							))}
					</div>

					{/* Total section */}
					<div className='w-full flex-1 bg-white rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 shadow-md gap-2 absolute bottom-0 '>
						<div className='flex items-center justify-between w-full px-12 py-2'>
							<div className='flex items-center'>
								<p className='text-gray-500 text-sm mr-2 font-semibold'>
									Subtotal:{' '}
								</p>
                                <p className='text-base font-semibold'> {tot}</p>
							</div>
							<div className='flex items-center'>
								<p className='text-gray-500 text-sm mr-2 font-semibold'>
									Taxes:
								</p>
								<p className='text-base font-semibold'> 1</p>
							</div>
						</div>
						<div className='flex items-center justify-between w-full mb-8'>
							<div className='flex flex-col items-center'>
								<p className='text-gray-500 font-semibold'>
									Total
								</p>
								<p className='text-2xl font-semibold'>
									{' '}
									<span className='text-sm'>GHC</span> {tot + 1}
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
			) : (
				<div className='w-full h-full text-center flex flex-col gap-3 items-center justify-center'>
					<BsCart3 className='text-6xl text-red-500' />
					<p className='text-sm font-semibold text-gray-600'>
						Hey there, you have nothing in your cart!
					</p>
				</div>
			)}
		</motion.div>
	)
}

export default CartContainer
