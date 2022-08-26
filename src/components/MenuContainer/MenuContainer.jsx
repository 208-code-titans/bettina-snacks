import React, { useState, useEffect } from 'react'
import { LandingSubHeading, Product, Loader, FilterButtons } from '../components'
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { firestore } from '../../firebase.config'

const MenuContainer = () => {
	const [allProducts, setAllProducts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		return onSnapshot(
			query(collection(firestore, 'products')),
			(snapshot) => {
				setAllProducts(snapshot.docs)
				setLoading(false)
			}
		)
	}, [firestore])
	// console.log(allProducts)

	const menuItems = [...new Set(allProducts.map((itemFilter) => itemFilter.data().category))]
	console.log(menuItems)

	return (
		<div className='w-full py-12 px-20'>
			<div>
				<LandingSubHeading
					title={'Explore Our'}
					span={'Menu'}
					className='text-3xl'
				/>
			</div>
			<div>
				<FilterButtons />
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
							{allProducts &&
								allProducts.map((item) => (
									<Product
										key={item.id}
										id={item.id}
										img={item.data().photo}
										name={item.data().name}
										category={item.data().category}
										price={item.data().price}
										tag={item.data().tag}
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
