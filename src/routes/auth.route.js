const { Signup } = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;