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
    unique: false,
    trim: false,
    lowercase: false,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email',
    },
  },
  isAdmin: {
    type: Boolean,
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