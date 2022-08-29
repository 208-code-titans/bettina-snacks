import React, { useState, useEffect } from 'react'
import {
	LandingSubHeading,
	Product,
	Loader,
} from '../components'
import { GiCupcake } from 'react-icons/gi'

import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { firestore } from '../../firebase.config'

const MenuContainer = () => {
	const [allProducts, setAllProducts] = useState([])
	const [loading, setLoading] = useState(false)
	const [filter, setFilter] = useState('all')
	const [filterList, setFilterList] = useState(allProducts)

	useEffect(() => {
		setLoading(true)
		return onSnapshot(
			query(collection(firestore, 'products')),
			(snapshot) => {
				setAllProducts(snapshot.docs)
				setFilterList(snapshot.docs)
				setLoading(false)
			}
		)
	}, [])
	// console.log(allProducts)

	const menuItems = [
		...new Set(allProducts.map((itemFilter) => itemFilter.data().category)),
	]

	const filterItem = (food) => {
		const newItem = allProducts.filter((newVal) => {
			return newVal.data().category === food
		})
		setFilterList(newItem)
	}

	// console.log(menuItems)

	return (
		<div className='w-full py-12 px-20'>
			<div>
				<LandingSubHeading
					title={'Explore Our'}
					span={'Menu'}
					className='text-3xl'
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-8 justify-center mb-4'>
				<div
					className={`${
						filter === 'all'
							? ' bg-white text-red-500 border-red-500 border-2'
							: 'bg-gradient-to-br from-red-400 to-red-500 text-white'
					}  hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear inline-block lg:p-8 p-4 rounded-lg  cursor-pointer shadow-lg`}
					onClick={() => {
						setFilter('all')
						setFilterList(allProducts)
					}}
				>
					<div className='text-center flex items-center justify-center flex-col'>
						<GiCupcake className='text-4xl lg:text-6xl' />
						<p className='text-xl'>All</p>
					</div>
				</div>
				{menuItems.map((filterCard) => (
					<div
						className={`${
							filter === filterCard
								? ' bg-white text-red-500 border-red-500 border-2'
								: 'bg-gradient-to-br from-red-400 to-red-500 text-white'
						}  hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear inline-block lg:p-8 p-4 rounded-lg  cursor-pointer shadow-lg`}
						onClick={() => {
							setFilter(filterCard)
							filterItem(filterCard)
						}}
						key={filterCard}
					>
						<div className='text-center flex items-center justify-center flex-col'>
							<GiCupcake className=' text-4xl lg:text-6xl' />
							<p className='text-xl'>{filterCard}</p>
						</div>
					</div>
				))}
			</div>
			<div>
				{loading ? (
					<>
						<div className='flex w-full items-center justify-center'>
							<Loader />
						</div>
					</>
				) : (
					<>
						<div className=' py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full'>
							{filterList &&
								filterList.map((item) => (
									<Product
										item={item}
									/>
								))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default MenuContainer
