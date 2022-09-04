import React from 'react'
import { DashboardAdd, PendingOrders, OngoingOrders, DeclinedOrders } from '../components/components'

const DashboardPage = () => {
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
