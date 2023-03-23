const router = require("express").Router();
const {
  getContact,
  createContact,
  getContactById,
  deleteContactById,
  updateContact,
} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").delete(deleteContactById);

router.route("/:id").get(getContactById);

router.route("/:id").put(updateContact);

module.exports = router;
