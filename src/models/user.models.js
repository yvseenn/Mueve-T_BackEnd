const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  username: {
    type: String,
    required: [false, "Your name is required"],
    unique: false,
  },
  dni : {
    type: String,
    required: [false, "Your DNI is required"],
  },
  surname: {
    type: String,
    required: [false, "Your surname is required"],
  },
  password: {
    type: String,
    required: [false, "Your password is required"],
  },
  email: {
    type: String,
    required: [false, 'User email is required'],
  },
  role: {
    type: String,
    required: false,
  },
  birthdate: {
    type: String,
    required: [false, "Your birthdate is required"],
  },
  phoneNumber: {
    type: String,
    required: [false, "Your phone number is required"],
  },
  direction :{
    type: String,
    required: [false, "Your direction is required"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);