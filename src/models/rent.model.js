const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentSchema = new Schema({
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Car"
    },
    sDate:{
        type:Date,
        required:[true, "Start date is required"]
    },
    fDate:{
        type:Date,
        required:[true, "End date is required"]
    },
    finalized:{
        type:Boolean,
        required:[false, "Marke as finalized if so"]
    }
});

const Rents = mongoose.model('rents',rentSchema);

module.exports = Rents;