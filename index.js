const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./src/routes/auth.routes");
const { MONGO_URL, PORT } = process.env;
const cloudinary=require("cloudinary").v2;
const logger = require("morgan");
const carRouter = require("./src/routes/cars.routes");
const rentRouter = require("./src/routes/rent.routes");

mongoose
.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(logger("dev"))

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})
app.use(
  cors({
    origin:"*",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/user", authRoute);
app.use("/fleet", carRouter);
app.use("/rental",rentRouter);