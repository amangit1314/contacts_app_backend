const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  //  desctructuring
  const { name, email, phone } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(200).send({ message: "hi this is the create contact route" });
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const deleteContactById = asyncHandler(async (req, res) => {
  res
    .status(200)
    .send({ message: `hi this is the delete route for ${req.params.id}` });
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const updateContact = asyncHandler(async (req, res) => (req, res) => {
  res
    .status(200)
    .send({ message: `hi this is the route for getting ${req.params.id}` });
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const getContactById = asyncHandler(async (req, res) => (req, res) => {
  res
    .status(200)
    .send({ message: `hi this is the put route for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  deleteContactById,
  getContactById,
  updateContact,
};
