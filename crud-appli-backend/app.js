require("dotenv").config();

const express = require("express");
const app = express();

const connectToDB = require("./config/db");
connectToDB();

const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

module.exports = app;
