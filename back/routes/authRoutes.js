const express = require("express");

const router = require("express").Router();

router.get("/login", AuthController.loginGet)

const AuthController = require("../controllers/AuthController")
		
		router.post("/login", AuthController.login);
		router.post("/cadastro", AuthController.cadastro);

module.exports = router;

