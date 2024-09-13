const express = require("express");
const { createUser, loginUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUser);

router.post("/update", updateUser);

router.post("/delete", deleteUser);


module.exports = router;
