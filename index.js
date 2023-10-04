// imports
const express = require("express");
const app = express();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

// db connection
connectDb();

// port
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(errorHandler);

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// listening to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
