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
      const rents = await Rents.find().populate(['client','car']);
      res.status(200).json(rents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  const getByID = async function (req, res, next) {
    try {
        const id = req.params.id;
        const rentalByID = await Rents.findById(id);
        if (!rentalByID){
            return res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                error: "Rental not found",
            })
        }
        return res.json ({
            status: 200,
            message: HTTPSTATUSCODE[200],
            Vehicle: rentalByID,
        })
    } catch (error) {
        return next(error);
    }
}

const updateRent = async function (req, res, next) {
    try {
        const id = req.params.id;
        const updatedRent = req.body;
        const rental = await Rents.findByIdAndUpdate(id, updatedRent, { new: true });
        
        if (!rental) {
            return res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                error: "Rental not found",
            });
        }

        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            updatedRent: rental,
        });
    } catch (error) {
        return next(error);
    }
};

const deleteAll = async function (req, res, next) {
    try {
      await Rents.deleteMany();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        deletedCount: "All rentals deleted",
      });
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = { getAll, getByID, createRent, updateRent, deleteAll };
  

