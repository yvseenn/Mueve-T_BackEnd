const express = require('express');
const router = express.Router()
const {isUser,isRoot,isAdmin} = require('../middlewares/access.middleware');


const {
    getAll, getByID, createRent,updateRent
} = require('../controllers/rent.controller');


router.get('/', getAll);
router.get('/:id', getByID);
router.post('/', createRent);
router.patch('/:id', updateRent);


module.exports = router
