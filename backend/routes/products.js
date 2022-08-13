import express from 'express'
import { createProduct, deleteProduct, editProduct, getAllProducts, getProduct } from '../controllers/product.js'


const router = express.Router()

// Create
router.post('/', createProduct)

// Update
router.put('/:id', editProduct)

// Delete
router.delete('/:id', deleteProduct)

// Get
router.get('/:id', getProduct)

// Get All
router.get('/', getAllProducts)

export default router
