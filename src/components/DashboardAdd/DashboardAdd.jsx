import React, {useState} from 'react'
import { dashboardAdd, strawberryCake } from '../images'
import { AiOutlineCloudUpload, AiFillTag } from 'react-icons/ai'
import {
	MdFastfood,
	MdOutlineAttachMoney,
	MdOutlineCategory,
} from 'react-icons/md'

const DashboardAdd = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [tag, setTag] = useState("")
    const [category, setCategory] = useState("")
    const [productImage, setProductImage] = useState("")

    // TODO: Add validation to form

	return (
		<div className='flex w-full gap-4 items-center px-10 py-8'>
			<div
				className='w-[60%] h-[25rem] bg-cover bg-top bg-no-repeat flex rounded-3xl overflow-hidden'
				style={{ backgroundImage: `url(${strawberryCake})` }}
			>
				<div className='w-full h-full bg-[rgba(0,0,0,0.85)]  text-white px-10 py-8 flex flex-col justify-center  '>
					<h1 className='text-red-500 text-3xl  '>Add New Product</h1>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-12 justify-between '>
							<div className='flex gap-6 '>
								<div className='flex items-center '>
									<MdFastfood className='absolute text-lg text-red-500' />
									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3 '
                                        placeholder='Product Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className='flex items-center '>
									<MdOutlineAttachMoney className='absolute text-lg text-red-500' />
									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
                                        placeholder='Product Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
									/>
								</div>
							</div>
							<div className='flex gap-6 '>
								<div className='flex items-center '>
									<AiFillTag className='absolute text-lg text-red-500' />

									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
                                        placeholder='Product Tag'
                                        value={tag}
                                        onChange={(e) => setTag(e.target.value)}
									/>
								</div>
								<div className='flex items-center '>
									<MdOutlineCategory className='absolute text-lg text-red-500' />

									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
                                        placeholder='Product Category'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className='bg-[rgba(0,0,0,0.3)]  rounded-xl w-[250px] h-[270px] flex items-center justify-center flex-col gap-3 border border-red-400 cursor-pointer hover:bg-[rgba(0,0,0,0.4)]'>
							<p>Click Here To Upload Image</p>
							<AiOutlineCloudUpload className='text-[4rem] text-red-400' />
						</div>
					</div>
					<button className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear  inline-block w-max px-6 py-4 rounded-full'>
						{' '}
						Add Product
					</button>
				</div>
			</div>
			<div className='w-[40%] flex'></div>
		</div>
	)
}

export default DashboardAdd
