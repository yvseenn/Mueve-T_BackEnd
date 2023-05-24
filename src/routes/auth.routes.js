const { Signup, Login,DeleteUser,UpdateUser,GetUserById,GetAllUsers } = require('../controllers/auth.controller')
const router = require('express').Router()
const {
    isUser,
    isAdmin,
    isRoot
} = require ('../middlewares/access.middleware')

router.post('/signup', Signup)
router.post('/login', Login)
router.delete('/deleteUser',[isRoot], DeleteUser)
router.patch('/updateUser',[isAdmin], UpdateUser)
router.get('/getUser', GetUserById)
router.post('/users', GetAllUsers)


module.exports = router