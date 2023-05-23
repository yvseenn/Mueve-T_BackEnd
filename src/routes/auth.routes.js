const { Signup, Login } = require('../controllers/auth.controller')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)


module.exports = router