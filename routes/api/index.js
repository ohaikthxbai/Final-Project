const express = require("express");
const router = express.Router();
const otherRoutes = require("./other");

router.use('/other', otherRoutes);

module.exports = router;