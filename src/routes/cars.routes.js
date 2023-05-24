const express = require('express');

const router =express.Router()
const upload = require('../middlewares/uploadFileCloudinary');
const {userVerification} = require('../middlewares/auth.middelwares');

const {
    getAll, 
    getByID,
    addCar,
    deleteCar,
    modifyCar
} = require('../controllers/cars.controller')


router.get('/',getAll);
router.get('/:id',getByID);
router.post('/', [userVerification],upload.single('image'),addCar);
router.delete('/', [userVerification],upload.single('image'),deleteCar);
router.patch('/', [userVerification],upload.single('image'),modifyCar);

module.exports = router;