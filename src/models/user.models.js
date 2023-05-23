const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
    unique: true,
  },
  dni : {
    type: String,
    required: [true, "Your DNI is required"],
  },
  surname: {
    type: String,
    required: [true, "Your surname is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  email: {
    type: String,
    required : [true, "Your email is required"],
  },
  birthdate: {
    type: String,
    required: [true, "Your birthdate is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Your phone number is required"],
  },
  direction :{
    type: String,
    required: [true, "Your direction is required"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);