const { PrismaCLient } = require("@prisma/client");
const prisma = new PrismaCLient();

async function main(){
    const usuarios = await prisma.usuario.findMany();
    console.log(JSON.stringfy(usuarios, null, 4));
}

main();

{
    "id": 1,
    "nome": "julia godoy",
    "email": "julia@gmail.com",
    "password":"senha123",
    "tipo": "cliente"
},
