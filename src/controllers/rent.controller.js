const Rents = require('../models/rent.model');
const HTTPSTATUSCODE = require('../utils/httpcodes');

const createRent = async function (req, res) {
    try {
        const newRent = new Rents(req.body);
        const rent = await newRent.save();
        res.status(200).json(rent);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}


const getAll = async function (req, res) {
    try {
      const rents = await Rents.find().populate(['client','car']);// llamar al cliente
      res.status(200).json(rents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const getByPlate = async function (req, res) {

    


}

module.exports = {getAll, getByPlate, createRent}