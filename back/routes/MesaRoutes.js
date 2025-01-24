const express = require("express");
const router = express.Router();
const MesaController = require("../controllers/MesaController");
const AuthController = require("../controllers/AuthController");

// Rota para cadastrar uma nova mesa (apenas para administradores)
router.post(
  "/novo",
  AuthController.verificaAutenticacao,
  AuthController.verificaPermissaoAdm,
  MesaController.novaMesa
);

// Rota para buscar todas as mesas
router.get("/", MesaController.buscarMesas);

module.exports = router;

