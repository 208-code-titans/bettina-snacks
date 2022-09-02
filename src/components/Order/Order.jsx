import React from 'react'
import { GiCupcake } from 'react-icons/gi'
import { BiRadioCircleMarked } from 'react-icons/bi'

const Order = ({id, orderItem, orderPrice, orderStatus, orderDate}) => {
  return (
      <div>
          {/* Large Screens */}
				<div className='flex flex-col gap-3'>
					<div className='gap-4 hidden lg:flex bg-white w-full px-6 py-4 justify-between items-center rounded-xl shadow-sm'>
						<div className='flex gap-3 items-center '>
							<div className='bg-gray-200 rounded-full p-2'>
								<GiCupcake className='text-3xl text-red-500 ' />
							</div>
							<p className='uppercase font-bold text-gray-600'>
								{orderItem}
							</p>
						</div>
                  <div>{orderPrice}</div>
						<div className='flex gap-2 items-center text-gray-500 capitalize'>
							<BiRadioCircleMarked className='text-2xl' />
							{orderStatus}
						</div>
                  <div className='text-sm'>{orderDate}</div>
					</div>
					
					
					
					{/* Mobile screens */}
					<div className='gap-4 lg:hidden flex bg-white flex-col rounded-2xl shadow-sm px-4 py-3'>
						<div className='flex items-center'>
							<div className='flex flex-1 gap-3 items-center '>
								<div className='bg-gray-200 rounded-full p-2'>
									<GiCupcake className='text-3xl text-red-500 ' />
								</div>
								<p className='capitalize font-medium '>
                                {orderItem}

								</p>
							</div>
							<div className='text-sm font-semibold text-gray-600'>
								{orderPrice}
							</div>
						</div>
						<div className='flex items-center ml-auto text-sm gap-6 capitalize'>
							<div className='flex gap-2 items-center text-gray-500'>
								<BiRadioCircleMarked className='text-2xl' />
								{orderStatus}
							</div>
							<div className='text-sm'>{orderDate}</div>
						</div>
					</div>
				</div>
    </div>
  )
}

export default Order