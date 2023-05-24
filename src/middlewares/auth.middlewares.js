const User = require("../models/user.models");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUserFromToken } = require("../utils/SecretToken");

const userVerification = async (req, res) => {
 const user = await getUserFromToken(req.params.token);
 if (user) {
  res.json(user);
 }else{
  res.json({status: 401});
 }
};

module.exports = {userVerification};