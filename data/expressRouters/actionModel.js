const express = require("express");
const actionDB = require("../helpers/actionModel");
const projectDB = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Im in the in the action router");
});

module.exports = router;
