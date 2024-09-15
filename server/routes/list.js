const express = require("express");
const router = express.Router();
const List = require("../models/List");
const { authenticate } = require("../middlewares/authenticate");
const {
  getLists,
  createList,
  updateList,
  deleteList,
  getListsById,
} = require("../controllers/listController");

router.use(authenticate);

router.get("/", getLists);

router.post("/", createList);

router.put("/:id", updateList);

router.delete("/:id", deleteList);

router.get("/:id", getListsById);

module.exports = router;
