const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        required: [true, "Model is required"]
    },
    licensePlate: {
        type: String,
        required: [true, "License is required"]
    },
    image:{
        type: String,
        required: [true, "Image is required"]
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
        required: [false, "Price is required"]
    },
    rentPrice:{
        type: String,
        required: [false, "Price is required"]
    },
    
});

const Cars = mongoose.model('cars',carSchema);

module.exports = Cars;