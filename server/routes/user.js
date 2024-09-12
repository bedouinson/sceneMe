const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();

// login
router.post("/", createUser);

// signup

module.exports = router;
