//implementar funcionalidade de cadastro de mesa

//testar e depois criar uma middleware para verificar se o usuário é um adm
//adicionar o middleware que só permite o acesso só de usuários e adm

const express = require("express");
const router = express.Router();

const ReservaController = require("../controllers/ReservaController");
const AuthController = require("../controllers/AuthController");

router.post(
  "/novo",
  ReservaController.novaReserva
);


module.exports = router;