const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, " Please add name"] },
    email: { type: String, required: [true, " Please add email"] },
    phone: { type: String, required: [true, " Please add phone"] },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
