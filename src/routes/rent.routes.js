const express = require('express');
const router = express.Router()
const {isUser,isRoot,isAdmin} = require('../middlewares/access.middleware');


const {
    getAll, getByID, createRent,updateRent,deleteAll
} = require('../controllers/rent.controller');


router.get('/', getAll);
router.get('/:id', getByID);
router.post('/' ,isAdmin,isUser, createRent);
router.patch('/:id',isAdmin,isUser, updateRent);
router.delete('/',isAdmin, deleteAll);


module.exports = router
