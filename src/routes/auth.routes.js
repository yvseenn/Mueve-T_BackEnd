const { Signup, Login,DeleteUser,UpdateUser,GetUserById,GetAllUsers } = require('../controllers/auth.controller')
const router = require('express').Router()
const {
    isUser,
    isAdmin,
    isRoot
} = require ('../middlewares/access.middleware')

router.post('/signup', Signup)
router.post('/login', Login)
router.delete('/:id', DeleteUser)
router.patch('/:id', UpdateUser)
router.get('/:id', GetUserById)
router.get('/', GetAllUsers)


module.exports = router