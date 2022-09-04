import React from 'react'
import { useState } from 'react'
import { onSnapshot, collection, query, where } from '@firebase/firestore'
import { firestore } from '../../firebase.config'
import { useEffect } from 'react'
import { Loader } from '../components'
import { FaThList } from 'react-icons/fa'
import { userImg } from '../images'

const DeclinedOrders = () => {
	const [loading, setLoading] = useState(false)
	const [orders, setOrders] = useState([])

	useEffect(() => {
		setLoading(true)
		return onSnapshot(
			query(
				collection(firestore, 'allOrders'),
				where('completionStatus', '==', 'declined')
			),
			(snapshot) => {
				setOrders(snapshot.docs)

				setLoading(false)
			}
		)
	}, [firestore])

	return (
		<div className='w-full mx-auto h-full xl:w-[40%] mt-7 flex flex-col px-6 max-h-[70vh]'>
			<h1 className='text-5xl text-red-500'>Declined Orders</h1>

			{loading ? (
				<>
					<div className='flex w-full h-full items-center justify-center'>
						<Loader />
					</div>
				</>
			) : (
				<>
					{orders && orders.length > 0 ? (
						<ul className='flex flex-col overflow-auto pr-4 pt-6'>
							{orders &&
								orders.map((item, index) => (
									<li className='border-b border-gray-300 py-2 w-full'>
										<div
											className='flex items-center gap-4'
											key={index}
										>
											<img
												src={
													item.data()?.userImage ||
													userImg
												}
												alt=''
												className='w-[60px] h-[60px] object-cover rounded-[50%] shadow-md p-[2px] border-red-400 border-2'
											/>
											<div className='w-full'>
												<div className='w-full flex flex-col md:flex-row justify-between items-center'>
													<p className='text-sm font-semibold text-gray-700'>
														{item.data().username}
													</p>
													<p className='md:bg-red-300 text-red-400 text-xs px-2 rounded-lg md:text-white'>
														{item.data().userEmail}
													</p>
												</div>
												<div className='flex gap-2'>
													{item.data().orderDetails &&
														item
															.data()
															.orderDetails.map(
																(
																	order,
																	index
																) => (
																	<p
																		key={
																			index
																		}
																		className='text-xs text-gray-600'
																	>
																		{
																			order?.name
																		}
																		-
																		{
																			order?.qty
																		}
																	</p>
																)
															)}
												</div>
											</div>
										</div>
									</li>
								))}
						</ul>
					) : (
						<div className='w-full h-screen text-center flex flex-col gap-3 items-center justify-center'>
							<FaThList className='text-6xl text-red-500' />
							<p className='text-sm font-semibold text-gray-600'>
								Hey there, you have no declined orders!
							</p>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default DeclinedOrders
