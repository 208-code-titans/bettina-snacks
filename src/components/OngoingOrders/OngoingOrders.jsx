import React from 'react'
import { useState } from 'react'
import {
	onSnapshot,
	collection,
	query,
	orderBy,
	addDoc,
	setDoc,
	updateDoc,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	where,
} from '@firebase/firestore'
import { firestore } from '../../firebase.config'
import { useEffect } from 'react'
import { Loader } from '../components'
import { FaThList } from 'react-icons/fa'
import { userImg } from '../images'
import { useStateValue } from '../../context/StateProvider'

const OngoingOrders = () => {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const [ userOngoingOrders, setUserOngoingOrders] = useState([])
	const [idenfier, setIdentifier] = useState('')
	const [{ user }] = useStateValue()


    useEffect(() => {
		setLoading(true)
		// Query posts by server timestamp
		return onSnapshot(
			query(
				collection(firestore, 'allOrders'),
				where('completionStatus', '==', 'ongoing')
				// orderBy('timestamp', 'desc')
			),
			(snapshot) => {
				setOrders(snapshot.docs)
				
				setLoading(false)
			}
		)
    }, [firestore])

    useEffect(() => {
		setLoading(true)
		// Query posts by server timestamp
		return onSnapshot(
			query(
				collection(firestore, 'users', 'email', user.email),
				where('completionStatus', '==', 'pending')
				// orderBy('timestamp', 'desc')
			),
			(snapshot) => {
				setUserOngoingOrders(snapshot.docs)
				userOngoingOrders.map((item, index) => {
					// setOrderDetails(item.data().orderDetails)
					// console.log(item.id)
				setIdentifier(item.id)
					// console.log(orderDetails)
				})
				setLoading(false)
			}
		)
	}, [firestore])
    
    const completeOrder = async (id, id2) => {
        console.log(id2)
		if (id2) {
			await updateDoc(doc(firestore, 'users', 'email', user.email, id2), {
				completionStatus: 'completed',
			})
		}
		
		await updateDoc(doc(firestore, 'allOrders', id), {
			completionStatus: 'completed',
		})
    }
    
  return (
      <div className=' flex flex-col w-full 2xl:w-[70%] h-full max-h-screen xl:max-h-[70vh] md:px-10 md:py-8'>
          <h1 className='text-5xl text-red-500 '>Ongoing Orders</h1>

          {
              loading ? (
                <>
                <div className='flex w-full h-full items-center justify-center'>
                    <Loader />
                </div>
            </>
              ) : (
              <>
                      {
                          orders && orders.length > 0 ? (
                            <ul className='flex flex-col overflow-auto pr-4'>
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
										<div className='w-full pt-3'>
											<div className='flex gap-4 ml-auto '>
												<button
													className='ml-auto bg-emerald-500 text-white px-4 py-1 shadow-lg rounded-lg'
													onClick={() => completeOrder(item.id, idenfier)
													}
												>
													Complete
												</button>
												
											</div>
										</div>
									</li>
								))}
                            </ul>  
                          ): (
                            <div className='w-full h-screen text-center flex flex-col gap-3 items-center justify-center'>
                            <FaThList className='text-6xl text-red-500' />
                            <p className='text-sm font-semibold text-gray-600'>
                                              Hey there, you have no ongoing orders at the moment! 
                                              <br /> Confirm some orders to see them pop up
                            </p>
                        </div>
                          )
                      }
               
               </>
              )
          }
      </div>
  )
}

export default OngoingOrders