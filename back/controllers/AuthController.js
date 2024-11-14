const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AuthController {

    static async cadastro(req, res){
        const{nome, email, password, tipo} = req.body;

        if(!nome || nome.length < 6){
            return res.json({
                erro: true,
                mensagem: "O nome deve ter 6 caracteres.",
            });
        }
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado!.",
            token: "12asdasd",
        });
    }

    static async login(req, res){

    }
}

//Vai indicar que, ao ser requerido esse arquivo, o que vai ser importado vai ser a classe AuthController.
module.exports = AuthController;