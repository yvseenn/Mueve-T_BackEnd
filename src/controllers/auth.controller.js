const User = require("../models/user.models");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

const Signup = async (req, res, next) => {
  try {
    const { name,username,surname,dni,password,email,birthdate,phoneNumber,direction } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      name,
      username,
      surname,
      dni,
      password,
      email,
      birthdate,
      phoneNumber,
      direction,
      role:"user",
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true, token: token, user:user  });
     next()
  } catch (error) {
    console.error(error);
  }
}

const DeleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const GetAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const UpdateUser = async (req, res, next) => {
  try {
    const {id} = req.params;
    const userInfo = await User.findByIdAndUpdate(id, req.body);
    if(!userInfo){
      return res.status(404).json({
        status:404,
        message:HTTPSTATUSCODE[404],
        error:"User not found",
      });
    }
    return res.status(200).json(userInfo);
  } catch (error) {
    return next(error)
  }
}; 
const GetUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {Login,Signup, DeleteUser, GetUserById,UpdateUser,GetAllUsers};