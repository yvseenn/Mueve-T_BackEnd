const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const carSchema = new mongoose.Schema({
    brand: {
        type: 'string',
        required: [true, "Brand is required"]
    },
    model: {
        type: 'string',
        required: [true, "Model is required"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"]
    },
    condition: {
        type: Number,
        required: [true, "Condition is required"]
    },   
    purchasePrice:{
        type: String,
        required: [true, "Price is required"]
    },
    rentPrice:{
        type: String,
        required: [true, "Price is required"]
    },
    
});