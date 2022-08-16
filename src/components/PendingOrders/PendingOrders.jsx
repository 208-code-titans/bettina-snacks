import React from 'react'

import { pendingOrders } from '../../fixtures/data'

const PendingOrders = () => {
	return (
		<div className='w-full md:w-[70%] lg:w-[30%] flex flex-col px-6 mt-7 max-h-screen'>
			<h1 className='text-4xl text-red-500 mb-auto'>Pending Orders</h1>
			<ul className='flex flex-col overflow-auto pr-4'>
				{pendingOrders &&
					pendingOrders.map((item, index) => (
						<li className='border-b border-gray-400 py-2     w-full'>
							<div
								className='flex items-center gap-4'
								key={index}
							>
								<img
									src={item.img}
									alt=''
									className='w-[70px] h-[70px] object-cover rounded-[50%]'
								/>
								<div className='w-full'>
									<div className='w-full flex justify-between items-center'>
										<p className='text-base'>{item.name}</p>
										<p className='bg-red-400 text-xs px-2 rounded-lg text-white'>
											{item.email}
										</p>
									</div>
									<p className='text-xs text-gray-600'>
										{item.desc}
									</p>
								</div>
							</div>
							<div className='w-full pt-3'>
								<div className='flex gap-4 ml-auto '>
                                    <button className='ml-auto bg-emerald-500 text-white px-4 py-1 shadow-lg rounded-lg'
                                    onClick={() => {}}
                                    >
										Confirm
									</button>
									<button className=' bg-red-500 text-white px-4 py-1 shadow-lg rounded-lg'>
										Decline
									</button>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	)
}

export default PendingOrders
