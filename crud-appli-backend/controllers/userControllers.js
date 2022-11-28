// Business Logic

// const home = (req, res) => {
//   res.send("Hello Nikhil");
// };

// module.exports = { home };

const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Hello Nikhil Khetan");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // To check all the details
    if (!name || !email) {
      throw new Error("Name and Email are required");
    }

    // Check if user exists or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      throw new Error("Email already exists");
    }

    // Inserting in DB
    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
