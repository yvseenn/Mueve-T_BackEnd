const express = require('express');
const router = express.Router()
const {isUser,isRoot,isAdmin} = require('../middlewares/access.middleware');


const {
    getAll, getByPlate, createRent
} = require('../controllers/rent.controller');


router.get('/', getAll);
router.post('/', createRent);


module.exports = router