const otherController = require("../../controllers/otherController.js");
const express = require("express");
const router = express.Router();

//router.route("/")
//    .get(otherController.findAll);

router.route("/")
    .get(otherController.testRoute);

module.exports = router;