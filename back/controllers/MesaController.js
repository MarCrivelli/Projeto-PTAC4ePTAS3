const prisma = require("../prisma/prismaClient");

class MesaController {
  // Método para criar uma nova mesa
  static async novaMesa(req, res) {
    const { numeroMesa, numeroLugares } = req.body;
    try {
      const mesa = await prisma.mesa.create({
        data: {
          codigo: numeroMesa,
          n_lugares: numeroLugares,
        },
      });
      return res.status(201).json({
        erro: false,
        mensagem: "Mesa cadastrada com sucesso!",
      });
    } catch (error) {
      console.error("Erro ao cadastrar mesa:", error);
      return res.status(500).json({
        erro: true,
        mensagem: "Erro ao cadastrar a mesa.",
      });
    }
  }

  // Método para buscar todas as mesas
  static async buscarMesas(req, res) {
    try {
      const mesas = await prisma.mesa.findMany(); // Busca todas as mesas no banco
      return res.status(200).json({
        erro: false,
        mesas,
      });
    } catch (error) {
      console.error("Erro ao buscar mesas:", error);
      return res.status(500).json({
        erro: true,
        mensagem: "Erro ao buscar mesas.",
      });
    }
  }
}

module.exports = MesaController;

  
