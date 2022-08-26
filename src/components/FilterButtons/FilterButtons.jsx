import React from 'react'
import { GiCupcake } from 'react-icons/gi'

const FilterButtons = ({filterWord}) => {
	return (
		<div className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear inline-block px-8 py-8 rounded-lg text-white cursor-pointer mr-4'>
			<div className='text-center flex items-center justify-center flex-col'>
				<GiCupcake className='text-6xl' />
                <p className='text-xl'>{filterWord}</p>
			</div>
		</div>
	)
}

export default FilterButtons
