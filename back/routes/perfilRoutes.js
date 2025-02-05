const express = require("express");
const router = express.Router();

const PerfilController = require("../controllers/perfilController");

router.get("/", PerfilController.getPerfil);

router.get("/", PerfilController.puxarUsuarios);

router.patch("/", PerfilController.atualizaPerfil);

// POST e GET
// PUT, PATCH, DELETE

module.exports = router;