import React, { useState, useEffect } from 'react'
import { LandingSubHeading } from '../components/components'
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

const InvoicesPage = () => {
	const [orders, setOrders] = useState([])
	const [id, setId] = useState('')

	const dbRef = collection(firestore, 'users')
	// console.log(dbRef)

	onSnapshot(dbRef, (snapshot) => {
		snapshot.docs.map((snap) => {
			setId(snap.id)
		})
	})

	const docsSnap = getDocs(dbRef)

	//   docsSnap.forEach(doc => {
	//     console.log(doc.data());
	// })

	// useEffect(() => {
	// 	// Query posts by server timestamp
	// 	docsSnap.forEach((doc) => {
	// 		console.log(doc.data())
	// 	})
	// }, [firestore])

	useEffect(() => {
		// Query posts by server timestamp
		return onSnapshot(
			query(collection(firestore, 'allOrders'), orderBy('timestamp', 'desc')),
			(snapshot) => {
				setOrders(snapshot.docs)
				console.log(snapshot.docs)
			}
		)
	  }, [firestore])

	return (
		<div className='pt-[67px] md:pt[67px] w-screen h-screen overflow-x-hidden bg-gray-100'>
			<div className='mx-auto w-full max-w-sm lg:max-w-5xl mt-4 py-4 px-6 flex flex-col gap-2'>
				<LandingSubHeading title={'Your '} span={'Orders'} />
				{/* Large Screens */}
				<div className='flex flex-col gap-3'>
					<div className='gap-4 hidden lg:flex bg-white w-full px-6 py-4 justify-between items-center rounded-xl shadow-sm'>
						<div className='flex gap-3 items-center '>
							<div className='bg-gray-200 rounded-full p-2'>
								<GiCupcake className='text-3xl text-red-500 ' />
							</div>
							<p className='uppercase font-bold text-gray-600'>
								RockCakes
							</p>
						</div>
						<div>GHC80</div>
						<div className='flex gap-2 items-center text-gray-500 capitalize'>
							<BiRadioCircleMarked className='text-2xl' />
							Pending
						</div>
						<div className='text-sm'>Aug 5, 2022</div>
					</div>

					{/* Mobile screens */}
					<div className='gap-4 lg:hidden flex bg-white flex-col rounded-2xl shadow-sm px-4 py-3'>
						<div className='flex items-center'>
							<div className='flex flex-1 gap-3 items-center '>
								<div className='bg-gray-200 rounded-full p-2'>
									<GiCupcake className='text-3xl text-red-500 ' />
								</div>
								<p className='capitalize font-medium '>
									RockCakes
								</p>
							</div>
							<div className='text-sm font-semibold text-gray-600'>
								GHC80
							</div>
						</div>
						<div className='flex items-center ml-auto text-sm gap-6 capitalize'>
							<div className='flex gap-2 items-center text-gray-500'>
								<BiRadioCircleMarked className='text-2xl' />
								Pending
							</div>
							<div className='text-sm'>Aug 5, 2022</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InvoicesPage
