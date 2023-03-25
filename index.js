const express = require("express");
const dbConnection = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorhandler");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

dbConnection();

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/contacts", require("./routes/contactsRoute"));
app.use("/api/v1/users", require("./routes/userRoute"));

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
