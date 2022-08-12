import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

// Connect Mongoose and handle initial connection errors
const connect = async () => {
    try {
        // removed await
		mongoose.connect(process.env.MONGO)
		console.log('Connected to MongoDB!!!')
	} catch (error) {
		throw error
	}
}

// Listen to diconnection status
mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected')
})

// Listen to connection status
mongoose.connection.on('connected', () => {
	console.log('MongoDB connected')
})

// Run app on free port
app.listen(8800, () => {
	connect()
	console.log('Connected to backend!!!!!!!!')
})
