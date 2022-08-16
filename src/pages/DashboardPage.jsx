import React from 'react'
import { DashboardAdd, PendingOrders } from '../components/components'

const DashboardPage = () => {
	return (
		<div className='pt-[67px] md:pt[67px] w-screen h-screen'>
			<div className='flex flex-col xl:flex-row justify-center'>
				<DashboardAdd />
				<PendingOrders />
			</div>
		</div>
	)
}

export default DashboardPage
