const deleteFile = require('../middlewares/deleteImgCloudinary');
const Car = require('../models/cars.models');
const HTTPSTATUSCODE = require("../utils/httpcodes");


const getAll = async function (req, res, next) {
    try {
        const allCars = await Car.find();
        return res.json({
            status:200,
            message:HTTPSTATUSCODE[200],
            Cars: allCars,
        });
    } catch (error) {
        return next(error);
    }
}

const getByID = async function (req, res, next) {
    try {
        const id = req.params.id;
        const carByID = await Car.findById(id);
        if (!carByID){
            return res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                error: "Car not found",
            })
        }
        return res.json ({
            status: 200,
            message: HTTPSTATUSCODE[200],
            Vehicle: carByID,
        })
    } catch (error) {
        return next(error);
    }
}

const addCar = async ( req, res , next) => {
    try {
        const {brand, model,licensePlate,image,condition,purchasePrice,rentPrice,year} = req.body;
        if(!brand|| !model||!licensePlate||!image||!condition||!purchasePrice||!rentPrice||!year){
            return res.status(400).json({
                status: 400,
                message: HTTPSTATUSCODE[400],
                error: "Required fields!",
            })
        }
        const newCar = new Car({brand, model,licensePlate,image,condition,purchasePrice,rentPrice,year})

        if (req.file) {
            newCar.image = req.file.path;
        }

        const addedCar = await newCar.save();
        return res.status(201).json({
            status:201,
            message: HTTPSTATUSCODE[201],
            Vehicle: addedCar,
        })
    } catch (error) {
        return next(error);
    }
};

const deleteCar = async (req, res, next) => {
    try {
        const {id} = req.params;
        const carDeleted = await Car.findByIdAndDelete(id);
        if(!carDeleted){
            return res.status(404).json({
                status: 404,
                message: HTTPSTATUSCODE[404],
                error: "Car not found",
              });
        }
        if (carDeleted.image){
            deleteFile(carDeleted.image)
        }
        return res.status(200).json(carDeleted);
    } catch (error) {
        return next(error);
    }
}
const modifyCar = async (req, res, next) => {
    try {
        const {id} = req.params;
        const carInfo = await Car.findById(id);
        const patchedInfo = new Car(req.body);
        patchedInfo._id = id
        if(!carInfo){
            return res.status(404).json({
                status:404,
                message: HTTPSTATUSCODE[404],
                error: "Car not found",
            });
        }
        if (req.body) {
            // console.log(req.body);
            if(carInfo.image){
                deleteFile(carInfo.image)
            }
            if(req.file){
                patchedInfo.image = req.file.path
            }
        }
        const savedInfo = await Car.findByIdAndUpdate(id, patchedInfo)
        return res.status(200).json({new:savedInfo, old:carInfo});
    } catch (error) {
            return next(error);
    }
}

module.exports = {getAll, getByID,addCar,deleteCar,modifyCar}