const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [25, "Name must be 25 character long"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("user", userSchema);
