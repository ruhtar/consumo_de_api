const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");

router.get("/:name", controller.pesquisaPerfil);

module.exports = router;
