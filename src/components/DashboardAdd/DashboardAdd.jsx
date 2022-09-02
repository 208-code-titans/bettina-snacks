import React, { useState } from 'react'
import {
	ref,
	getDownloadURL,
	uploadBytesResumable,
	deleteObject,
} from 'firebase/storage'
import axios from 'axios'
import { storage } from '../../firebase.config'
import { motion } from 'framer-motion'
import { strawberryCake } from '../images'
import { AiOutlineCloudUpload, AiFillTag } from 'react-icons/ai'
import {
	MdFastfood,
	MdOutlineAttachMoney,
	MdOutlineCategory,
	MdDelete,
} from 'react-icons/md'
import { Loader } from '../components'
import {
	addDoc,
	collection,
} from '@firebase/firestore'
import { firestore } from '../../firebase.config'

const DashboardAdd = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [tag, setTag] = useState('')
	const [category, setCategory] = useState('')
	const [slug, setSlug] = useState('')
	const [productImage, setProductImage] = useState(null)
	const [fields, setFields] = useState(false) // to monitor errors
	const [alertStatus, setAlertStatus] = useState('danger')
	const [message, setMessage] = useState(null)
	const [loading, setLoading] = useState(false)

	const clearData = () => {
		setName('')
		setPrice('')
		setTag('')
		setCategory('')
		setProductImage(null)
	}

	// Upload image to firestore
	const uploadImage = (e) => {
		setLoading(true)
		const imageFile = e.target.files[0]
		// Store image name uniquely
		const storageRef = ref(
			storage,
			`Images/${Date.now()}-${imageFile.name}`
		)
		const uploadTask = uploadBytesResumable(storageRef, imageFile)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const uploadProgress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
			},
			(error) => {
				console.log(error)
				setFields(true)
				setMessage('Error while uploading. Try Again!')
				setAlertStatus('danger')
				setTimeout(() => {
					setFields(false)
					setLoading(false)
				}, 4000)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setProductImage(downloadURL)
					setLoading(false)
					setFields(true)
					setMessage('Image uploaded successfully!')
					setAlertStatus('success')
					setTimeout(() => {
						setFields(false)
					}, 4000)
				})
			}
		)
	}

	// Delete Image from Preview
	const deleteImage = () => {
		setLoading(true)
		const deleteRef = ref(storage, productImage)
		deleteObject(deleteRef).then(() => {
			setProductImage(null)
			setLoading(false)
			setFields(true)
			setMessage('Image deleted successfully!')
			setAlertStatus('success')
			setTimeout(() => {
				setFields(false)
			}, 4000)
		})
	}

	// Add Product to MongoDB Database
	const addProduct = () => {
		setLoading(true)
		try {
			if (!name || !price || !tag || !category || !productImage) {
				setFields(true)
				setMessage("Required fields can't be empty")
				setAlertStatus('danger')
				setTimeout(() => {
					setFields(false)
					setLoading(false)
				}, 4000)
				clearData()
			} else {
				const data = {
					name: name,
					photo: productImage,
					tag: tag,
					category: category,
					slug: slug,
					price: price,
				}
				// console.table(data)
				// const jsonData = JSON.stringify(data)
				// console.log(jsonData)
				// try {
				// 	const result = await axios.create({
				// 		url: process.env.REACT_APP_API_BASE_URL + '/products',
				// 		method: 'post',
				// 		data: data,
				// 	})
				// 	console.log(result)
					// setFields(true)
					// setMessage('Product added successfully!')
					// setAlertStatus('success')
					// setTimeout(() => {
					// 	setFields(false)
					// }, 4000)
				// } catch (error) {
				// 	console.log(error)
				// 	setFields(true)
				// 	setMessage('Error accessing database. Try Again!')
				// 	setAlertStatus('danger')
				// 	setTimeout(() => {
				// 		setFields(false)
				// 		setLoading(false)
				// 	}, 4000)
				// }
				fetch(process.env.REACT_APP_API_BASE_URL + '/products', {
					method: 'POST', // or 'PUT'
					headers: {
					  'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				  })
				  .then((response) => response.json())
				  .then((data) => {
					  console.log('Success:', data);
					  setFields(true)
					  setMessage('Product added successfully!')
					  setAlertStatus('success')
					  setLoading(false)
					  setTimeout(() => {
						  setFields(false)
					  }, 4000)
					  clearData()
				  })
				  .catch((error) => {
					console.error('Error:', error);
				  })
			}
		} catch (error) {
			console.log(error)
			setFields(true)
			setMessage('Error while uploading. Try Again!')
			setAlertStatus('danger')
			setTimeout(() => {
				setFields(false)
				setLoading(false)
			}, 4000)
			clearData()
		}
	}

	// Add Product to Firebase
	const pushProduct = async () => {
		setLoading(true)
		try {
			if (!name || !price || !tag || !category || !productImage) {
				setFields(true)
				setMessage("Required fields can't be empty")
				setAlertStatus('danger')
				setTimeout(() => {
					setFields(false)
					setLoading(false)
				}, 4000)
				clearData()
			} else {
				
				await addDoc(collection(firestore, 'products'), {
					name: name,
					photo: productImage,
					tag: tag,
					category: category,
					slug: slug,
					price: price,
					qty: 1,
				})
				setFields(true)
				setMessage("Success")
				setAlertStatus('success')
				setTimeout(() => {
					setFields(false)
					setLoading(false)
				}, 4000)
				clearData()
			}
			
		} catch (error) {
			console.log(error)
			setFields(true)
			setMessage('Error while uploading. Try Again!')
			setAlertStatus('danger')
			setTimeout(() => {
				setFields(false)
				setLoading(false)
			}, 4000)
			clearData()
		}
	}

	

	return (
		<div className='flex flex-col mx-auto 2xl:flex-row w-full 2xl:w-[70%] max-h-screen xl:max-h-[70vh] md:px-10 md:py-8'>
			<div
				className='w-full  m-h-[25rem] bg-cover bg-top bg-no-repeat flex md:rounded-3xl overflow-hidden'
				style={{ backgroundImage: `url(${strawberryCake})` }}
			>
				<div className='w-full h-full bg-[rgba(0,0,0,0.85)]  text-white px-10 py-8 flex flex-col justify-center  '>
					<h1 className='text-red-500 text-3xl mb-4  '>
						Add New Product
					</h1>
					{fields && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`w-full p-2 rounded-lg text-center text-lg font-semibold mb-2 ${
								alertStatus === 'danger'
									? 'bg-red-200 text-red-800'
									: 'bg-emerald-200 text-emerald-800'
							}`}
						>
							{message}
						</motion.p>
					)}
					<div className='flex flex-col xl:flex-row gap-4 items-center justify-between'>
						<div className='flex flex-col gap-12 justify-between '>
							<div className='flex gap-6 flex-col md:flex-row mx-auto md:m-0 '>
								<div className='flex items-center '>
									<MdFastfood className='absolute text-lg text-red-500' />
									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3 '
										placeholder='Product Name'
										required
										value={name}
										onChange={(e) => {
											setName(e.target.value)
											setSlug(
												e.target.value
													.toLowerCase()
													.replaceAll(' ', '_')
											)
										}}
									/>
								</div>
								<div className='flex items-center '>
									<MdOutlineAttachMoney className='absolute text-lg text-red-500' />
									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
										placeholder='Product Price'
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
								</div>
							</div>
							<div className='flex gap-6 flex-col md:flex-row mx-auto md:m-0 '>
								<div className='flex items-center '>
									<AiFillTag className='absolute text-lg text-red-500' />

									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
										placeholder='Product Tag'
										required
										value={tag}
										onChange={(e) => setTag(e.target.value)}
									/>
								</div>
								<div className='flex items-center '>
									<MdOutlineCategory className='absolute text-lg text-red-500' />

									<input
										type='text'
										className='bg-transparent border-0 border-b-2 border-red-200 focus:ring-0 focus:border-red-500 relative ml-3'
										placeholder='Category'
										required
										value={category}
										onChange={(e) =>
											setCategory(e.target.value)
										}
									/>
								</div>
							</div>
						</div>
						<div className=' group rounded-xl w-[250px] h-[270px] flex items-center justify-center flex-col gap-3 border border-red-400 cursor-pointer '>
							{loading ? (
								<Loader />
							) : (
								<>
									{!productImage ? (
										<>
											<label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
												<div className='w-full h-full flex flex-col items-center justify-center'>
													<AiOutlineCloudUpload className='text-[3rem] text-red-400' />
													<p>
														Click Here To Upload
														Image
													</p>
												</div>
												<input
													type='file'
													name='uploadimage'
													accept='image/*'
													onChange={uploadImage}
													className='w-0 h-0	'
												/>
											</label>
										</>
									) : (
										<>
											<div className='relative h-full overflow-hidden'>
												<img
													src={productImage}
													alt='uploaded_img'
													className='w-full h-full object-cover rounded-xl'
												/>
												<button
													type='button'
													className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
													onClick={deleteImage}
												>
													<MdDelete className='text-white' />
												</button>
											</div>
										</>
									)}
								</>
							)}
						</div>
					</div>
					<button
						className='bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 transition-colors duration-700 ease-linear  inline-block w-max px-6 py-4 rounded-full mx-auto my-3'
						onClick={pushProduct}
					>
						{' '}
						Add Product
					</button>
				</div>
			</div>
			
		</div>
	)
}

export default DashboardAdd
