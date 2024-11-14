const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AuthController {

    static async cadastro(req, res){

    }

    static async login(req, res){

    }
}

//Vai indicar que, ao ser requerido esse arquivo, o que vai ser importado vai ser a classe AuthController.
module.exports = AuthController;