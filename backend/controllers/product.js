import Product from '../models/Product.js'
import { createError } from '../utils/error.js'

export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)

	try {
		const savedProduct = await newProduct.save()
		res.status(200).json(savedProduct)
	} catch (error) {
		// If error, show error
		next(err)
	}
}

export const editProduct = async (req, res, next) => {
    try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		)
		res.status(200).json(updatedProduct)
	} catch (error) {
		// If error, show error
		next(err)
	}
}
export const deleteProduct = async (req, res, next) => {
    try {
		await Product.findByIdAndDelete(req.params.id)
		res.status(200).json('Product deleted successfully!')
	} catch (error) {
		// If error, show error
		next(err)
	}
}
export const getProduct = async (req, res, next) => {
    try {
		const product = await Product.findById(req.params.id)
		res.status(200).json(product)
	} catch (error) {
		// If error, show error
		next(err)
	}
}
export const getAllProducts = async (req, res, next) => {
    try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		// If error, show error
		next(error)
	}
}