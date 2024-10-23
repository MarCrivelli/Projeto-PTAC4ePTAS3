const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    //Insert de usuário
    const novoUsuario = await prisma.usuario.create({
        data:{
            nome:"Crivello",
            email: "crivello@gmail.com"
        },
    });

    console.log("Novo Usuário: " + JSON.stringify (novoUsuario));
}

main();