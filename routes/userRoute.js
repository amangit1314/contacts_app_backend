const router = require("express").Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

usersRouterouter.post("/current", currentUser);

module.exports = router;
