import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

// Create
router.post('/', async (req, res) => {
	const newProduct = new Product(req.body)

	try {
		const savedProduct = await newProduct.save()
		res.status(200).json(savedProduct)
	} catch (error) {
		// If error, show a status 500 server error
		res.status(500).json(error)
	}
})

// Update
router.put('/:id', async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		)
		res.status(200).json(updatedProduct)
	} catch (error) {
		// If error, show a status 500 server error
		res.status(500).json(error)
	}
})

// Delete
router.delete('/:id', async (req, res) => {
	try {
		await Product.findByIdAndDelete(
			req.params.id
		)
		res.status(200).json("Product deleted successfully!")
	} catch (error) {
		// If error, show a status 500 server error
		res.status(500).json(error)
	}
})

// Get
router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(
			req.params.id
		)
		res.status(200).json(product)
	} catch (error) {
		// If error, show a status 500 server error
		res.status(500).json(error)
	}
})

// Get All
router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		// If error, show a status 500 server error
		res.status(500).json(error)
	}
})

export default router
