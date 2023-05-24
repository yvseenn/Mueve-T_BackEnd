const { Signup, Login,DeleteUser,UpdateUser,GetUserById,GetAllUsers } = require('../controllers/auth.controller')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.delete('/deleteUser', DeleteUser)
router.patch('/updateUser', UpdateUser)
router.get('/getUser', GetUserById)
router.post('/users', GetAllUsers)


module.exports = router