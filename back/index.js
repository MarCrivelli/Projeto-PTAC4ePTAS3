const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Função que, ao ser chamada, vai criar um usuário e trazê-lo já cadastrado.
async function main() {
    //O ".usuário" se trata do nome da tabela que foi criada.
    const usuario = await prisma.usuario.create({
        data:{
            nome: "Marco",
            email: "aeeerawr@exemplo.com",
            password: "123",
            tipo: "cliente",
        },
    });
    //Função para buscar todos os usuários.
    const usuarios = await prisma.usuario.findMany();
    console.log("Usuários: " + JSON.stringify(usuarios))
    console.log("Novo Usuário: " + JSON.stringify(usuario));
}

main();