const { PrismaCLient } = require("@prisma/client");
const prisma = new PrismaCLient();

class AuthController {
    static async cadastro(req,res) {
        const {nome, email, password, tipo} = req.body;

        if(!nome || nome.length < 6){
            return res.json({
                erro: true,
                mensagem: "O nome deve ter pelo menos 6 caracteres.",
            })
        }

        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso",
            token: "aaaaa"
        })
    }

    static async login(req,res) {}
}

module.exports = AuthController;
