import React, { useState, useEffect } from 'react'
import { LandingSubHeading, Loader } from '../components/components'
import { GiCupcake } from 'react-icons/gi'
import { BiRadioCircleMarked } from 'react-icons/bi'
import { firestore } from '../firebase.config'
import {
	onSnapshot,
	collection,
	query,
	orderBy,
	addDoc,
	setDoc,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
} from '@firebase/firestore'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { BsCart3 } from 'react-icons/bs'

const InvoicesPage = () => {
	const [orders, setOrders] = useState([])
	const [orderDetails, setOrderDetails] = useState([])
	const [loading, setLoading] = useState(false)

	const [{ user }, dispatch] = useStateValue()

	useEffect(() => {
		setLoading(true)

		// Query posts by server timestamp
		return onSnapshot(
			query(
				collection(firestore, 'users', 'email', user.email),
				orderBy('timestamp', 'desc')
			),
			(snapshot) => {
				setOrders(snapshot.docs)

				// console.log(snapshot.docs.data())
				orders.map((item, index) => {
					setOrderDetails(item.data().orderDetails)
					// console.log(orderDetails)
				})
				setLoading(false)
			}
		)
	}, [firestore])

	// console.log(orders);

	return (
		<div className='pt-[67px] md:pt[67px] w-screen h-screen overflow-x-hidden bg-gray-100'>
			<div className='mt-6'>
				<LandingSubHeading title={'Your '} span={'Orders'} />
			</div>
			{loading ? (
				<>
					<div className='flex w-full items-center justify-center'>
						<Loader />
					</div>
				</>
			) : (
				<>
					{orders.length > 0 ? (
						<div className='mx-auto w-full max-w-sm lg:max-w-5xl mt-4 py-4 px-6 flex flex-col gap-2'>
							{/* Large Screens */}

							<div className='flex flex-col gap-3'>
								{orders &&
									orders.map((item) => (
										<div className='gap-6 hidden lg:flex bg-white w-full px-6 py-4 justify-between items-center rounded-xl shadow-sm'>
											<div className='flex flex-1 gap-3 items-center '>
												<div className='bg-gray-200 rounded-full p-2'>
													<GiCupcake className='text-3xl text-red-500 ' />
												</div>

												{item.data().orderDetails &&
													item
														.data()
														.orderDetails.map(
															(order, index) => (
																<div
																	key={index}
																>
																	<p className='text-lg '>
																		{
																			order?.name
																		}
																	</p>
																</div>
															)
														)}
											</div>
											<div>
												
																	<p className='font-bold text-gray-600'>
																		GHC
																		{
																			item.data().price
																		}
																	</p>
																
											</div>
											<div>
												{item.data().orderDetails &&
													item
														.data()
														.orderDetails.map(
															(order, index) => (
																<div
																	key={index}
																	className=''
																>
																	<p className='font-bold text-gray-600'>
																		{
																			order?.tag
																		}{' '}
																		-{' '}
																		{
																			order?.qty
																		}{' '}
																	</p>
																</div>
															)
														)}
											</div>
											<div
												className={`flex gap-2 items-center capitalize ${
													item.data()
														.completionStatus ===
													'pending'
														? 'text-gray-500'
														: ''
												}
                        ${
							item.data().completionStatus === 'declined'
								? 'text-red-600'
								: ''
						}
                        ${
							item.data().completionStatus === 'ongoing'
								? 'text-yellow-500'
								: ''
						}
                        ${
							item.data().completionStatus === 'completed'
								? 'text-emerald-600'
								: ''
						}
                      `}
											>
												<BiRadioCircleMarked className='text-2xl' />
												{item.data().completionStatus}
											</div>
											<div className='text-sm'></div>
										</div>
									))}

								{/* Mobile screens */}
								{orders &&
									orders.map((item) => (
										<div className='gap-4 lg:hidden flex bg-white flex-col rounded-2xl shadow-sm px-4 py-3'>
											<div className='flex items-center'>
												<div className='flex flex-1 gap-3 items-center '>
													<div className='bg-gray-200 rounded-full p-2'>
														<GiCupcake className='text-3xl text-red-500 ' />
													</div>
													{item.data().orderDetails &&
														item
															.data()
															.orderDetails.map(
																(
																	order,
																	index
																) => (
																	<div
																		key={
																			index
																		}
																	>
																		<p className='text-lg '>
																			{
																				order?.name
																			}
																		</p>
																	</div>
																)
															)}
												</div>
												
																	<p className='font-bold text-gray-600 text-sm'>
																		GHC
																		{
																			item.data().price
																		}
																	</p>
																
											</div>
											<div className='flex items-center ml-auto text-sm gap-6 capitalize'>
												<div
													className={`flex gap-2 items-center text-gray-500 ${
														item.data()
															.completionStatus ===
														'pending'
															? 'text-gray-500'
															: ''
													}
                        ${
							item.data().completionStatus === 'declined'
								? 'text-red-600'
								: ''
						}
                        ${
							item.data().completionStatus === 'ongoing'
								? 'text-yellow-500'
								: ''
						}
                        ${
							item.data().completionStatus === 'completed'
								? 'text-emerald-600'
								: ''
						}`}
												>
													<BiRadioCircleMarked className='text-2xl' />
													{
														item.data()
															.completionStatus
													}
												</div>
												<div>
													{item.data().orderDetails &&
														item
															.data()
															.orderDetails.map(
																(
																	order,
																	index
																) => (
																	<div
																		key={
																			index
																		}
																		className=''
																	>
																		<p className='font-bold text-gray-600 text-sm'>
																			{
																				order?.tag
																			}{' '}
																			-{' '}
																			{
																				order?.qty
																			}{' '}
																		</p>
																	</div>
																)
															)}
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					) : (
						<div className='w-full h-[70vh] text-center flex flex-col gap-3 items-center justify-center'>
							<BsCart3 className='text-6xl text-red-500' />
							<p className='text-sm font-semibold text-gray-600'>
								Hey there, you have nothing in your invoices
								list! <br /> Place an order to see your
								invoices.
							</p>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default InvoicesPage
