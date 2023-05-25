const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {
        type: String,
        required: [false, "Brand is required"]
    },
    model: {
        type: String,
        required: [false, "Model is required"]
    },
    licensePlate: {
        type: String,
        required: [false, "License is required"]
    },
    image:{
        type: String,
        required: [false, "Image is required"]
    },
    year: {
        type: Number,
        required: [false, "Year is required"]
    },
    condition: {
        type: Number,
        required: [false, "Condition is required"]
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