import React from 'react'
import { DashboardAdd, PendingOrders, OngoingOrders, DeclinedOrders } from '../components/components'
import { useStateValue } from '../context/StateProvider'
import { HOME, SIGN_IN } from '../constants/routes'
import { Navigate } from 'react-router-dom'


const DashboardPage = () => {
	// const [{ user }] = useStateValue()
	// console.log(user)
	// if (user) {
	// 	if (user.email !== 'snacksbettina@gmail.com') {
	// 		return <Navigate to={HOME} replace/>
	// 	}
	// 	return <Navigate to={SIGN_IN} replace />
	// }
	return (
		<div className='pt-[67px] md:pt[67px] w-screen min-h-screen mb-12'>
			<div className='flex flex-col xl:flex-row justify-center max-h-screen'>
				<DashboardAdd />
				<PendingOrders />
			</div>
			<div className='flex flex-col xl:flex-row mt-64 xl:mt-6 px-16 gap-4'>
				<OngoingOrders />
				<DeclinedOrders />
			</div>
			
		</div>
	)
}

export default DashboardPage
