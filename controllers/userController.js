const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc To register the user
// @route POST /api/v1/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  res.json({ message: "Register the user" });
});

// @desc To login the user
// @route POST /api/v1/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

// @desc To get the current user
// @route GET /api/v1/users/current
// @access public
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Get current user" });
});

module.exports = { registerUser, loginUser, currentUser };
