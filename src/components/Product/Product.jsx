import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { useState } from 'react'
import { useEffect } from 'react'



const Product = ({ item }) => {
    const [{ cartItems }, dispatch] = useStateValue()
    const [items, setItems] = useState([])
    
    const addToCart = () => {
        // console.log(item.data())
        
        dispatch({
            type: actionType.SET_CART_ITEMS,
            // Append new item to array
            cartItems : items
        })
        // console.log(cartItems)

        // Save cart items in storage
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        addToCart();
    }, [items]);
    
  return (
    <div
    key={item.id}
    className='h-[320px] object-cover bg-cover bg-bottom bg-no-repeat rounded-3xl relative shadow-2xl'
    style={{ backgroundImage: `url(${item.data().photo})` }}
>
    <div className='bg-white inline-block absolute top-4 px-2 shadow-xl rounded-full right-3 font-bold text-red-500'>
        GHC{item.data().price}
    </div>
    <div className='bg-white w-full absolute bottom-0 rounded-3xl py-8 px-4 drop-shadow-sm flex flex-col gap-2'>
        <div className='flex items-center w-full justify-between text-[.7rem] font-medium'>
            <p className='text-gray-700 text-lg font-bold'>
                {item.data().name}
            </p>
            <p className='bg-red-400 px-2 rounded-lg capitalize text-white'>
                {item.data().category}
            </p>
        </div>

        <div className='flex items-center justify-between'>
            <div className='text-cormorant w-[50%]'>
                <p className='text-xl'>
                    <span className='text-red-400'>
                        {item.data().tag}
                    </span>{' '}
                </p>
            </div>
            <motion.div
                className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear h-10 w-10 rounded-full flex items-center justify-center text-white cursor-pointer text-xl '
                      whileTap={{ scale: 0.6 }}
                      onClick={() => setItems([...cartItems, item.data()])}
            >
                <BsCartPlus />
            </motion.div>
        </div>
    </div>
</div>
  )
}

export default Product