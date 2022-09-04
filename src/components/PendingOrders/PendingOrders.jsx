import React from 'react'
import { useState } from 'react'
import {
	onSnapshot,
	collection,
	query,
	updateDoc,
	doc,
	where,
} from '@firebase/firestore'
import { firestore } from '../../firebase.config'
import { useEffect } from 'react'
import { Loader } from '../components'
import { FaThList } from 'react-icons/fa'
import { userImg } from '../images'

const PendingOrders = () => {
	const [pendingOrders, setPendingOrders] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		// Query posts by server timestamp
		return onSnapshot(
			query(
				collection(firestore, 'allOrders'),
				where('completionStatus', '==', 'pending')
			),
			(snapshot) => {
				setPendingOrders(snapshot.docs)
				setLoading(false)
			}
		)
	}, [firestore])

	const confirmOrder = async (id) => {
		await updateDoc(doc(firestore, 'allOrders', id), {
			completionStatus: 'ongoing',
		})
	}

	const declineOrder = async (id) => {
		await updateDoc(doc(firestore, 'allOrders', id), {
			completionStatus: 'declined',
		})
	}

	return (
		<div className='w-full mx-auto h-full md:w-[80%] flex flex-col px-6 mt-7 max-h-[70vh]'>
			<h1 className='text-4xl text-red-500 mb-auto'>Pending Orders</h1>

			{loading ? (
				<>
					<div className='flex w-full items-center justify-center'>
						<Loader />
					</div>
				</>
			) : (
				<>
					{pendingOrders && pendingOrders.length > 0 ? (
						<ul className='flex flex-col overflow-auto pr-4'>
							{pendingOrders &&
								pendingOrders.map((item, index) => (
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
										<div className='w-full pt-3'>
											<div className='flex gap-4 ml-auto '>
												<button
													className='ml-auto bg-emerald-500 text-white px-4 py-1 shadow-lg rounded-lg'
													onClick={() => {
														confirmOrder(item.id)
													}}
												>
													Confirm
												</button>
												<button
													className=' bg-red-500 text-white px-4 py-1 shadow-lg rounded-lg'
													onClick={() => {
														declineOrder(item.id)
													}}
												>
													Decline
												</button>
											</div>
										</div>
									</li>
								))}
						</ul>
					) : (
						<div className='w-full h-screen text-center flex flex-col gap-3 items-center justify-center'>
							<FaThList className='text-6xl text-red-500' />
							<p className='text-sm font-semibold text-gray-600'>
								Hey there, you have nothing in your pending
								orders list! <br /> You will see some orders
								when customers place orders
							</p>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default PendingOrders
