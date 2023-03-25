const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, " Please add name"] },
    email: { type: String, required: [true, " Please add email"] },
    phone: { type: String, required: [true, " Please add phone"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
