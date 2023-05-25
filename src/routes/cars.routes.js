const express = require('express');

const router =express.Router()
const upload = require('../middlewares/uploadFileCloudinary');
const {isUser,isRoot,isAdmin} = require('../middlewares/access.middleware');

const {
    getAll, 
    getByID,
    addCar,
    deleteCar,
    modifyCar
} = require('../controllers/cars.controller')


router.get('/',getAll);
router.get('/:id',getByID);
router.post('/',upload.single('image'),addCar);
router.delete('/:id',upload.single('image'),deleteCar);
router.patch('/:id',upload.single('image'),modifyCar);

module.exports = router;