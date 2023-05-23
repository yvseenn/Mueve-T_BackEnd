const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {
        type: 'string',
        required: [true, "Brand is required"]
    },
    model: {
        type: 'string',
        required: [true, "Model is required"]
    },
    image:{
        type: 'string',
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
        required: [true, "Price is required"]
    },
    rentPrice:{
        type: String,
        required: [true, "Price is required"]
    },
    
});

const Cars = mongoose.model('cars',carSchema);

module.exports = Cars;