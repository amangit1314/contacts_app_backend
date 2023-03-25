const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  if (!contact) {
    res.status(404);
    throw new Error("Cannot found contact");
  }
  res.status(200).json(contact);
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
  const contact = await Contact.create({ name, email, phone });
  res.status(201).send(contact);
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const deleteContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  if (!contact) {
    res.status(404);
    throw new Error("Cannot found contact");
  }
  await Contact.remove();
  res.status(200).send(contact);
});

// @desc Get all contacts
// @route Get /api/contacts/
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  if (!contact) {
    res.status(404);
    throw new Error("Cannot found contact");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).send(updatedContact);
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
