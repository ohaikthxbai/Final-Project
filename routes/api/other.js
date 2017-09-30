const otherController = require("../../controllers/otherController.js");
const express = require("express");
const router = express.Router();

router.route("/")
    .get(otherController.findAll);

module.exports = router;