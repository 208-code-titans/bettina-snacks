import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

export default mongoose.model("Product", ProductSchema)