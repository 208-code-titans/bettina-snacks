import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ route, text }) => {
	return (
		<Link to={route} className=''>
			<motion.div
				className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear  inline-block px-9 py-4 rounded-full text-white'
				whileTap={{ scale: 0.8 }}
			>
				<p>{text}</p>
			</motion.div>
		</Link>
	)
}

export default Button
