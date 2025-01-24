const prisma = require("../prisma/prismaClient");

class ReservaController {
  static async novaReserva(req, res) {
    const { numeroMesa, numeroPessoas, data } = req.body;

    // Validação dos campos obrigatórios
    if (!numeroMesa || !numeroPessoas || !data) {
      return res.status(400).json({
        erro: true,
        mensagem: "Todos os campos são obrigatórios.",
      });
    }

    const dataReserva = new Date(data);

    try {
      // Verifica se a mesa existe
      const mesa = await prisma.mesa.findUnique({
        where: { id: numeroMesa },
      });

      if (!mesa) {
        return res.status(404).json({
          erro: true,
          mensagem: "Mesa não encontrada.",
        });
      }

      // Verifica se já existe uma reserva para a data e mesa informadas
      const reservas = await prisma.reserva.findMany({
        where: {
          mesaId: numeroMesa,
          data: dataReserva,
          status: true, // Apenas reservas ativas
        },
      });

      if (reservas.length > 0) {
        return res.status(400).json({
          erro: true,
          mensagem: "Mesa já reservada para esta data.",
        });
      }

      // Verifica se o número de pessoas excede a capacidade da mesa
      if (numeroPessoas > mesa.n_lugares) {
        return res.status(400).json({
          erro: true,
          mensagem: "Número de pessoas excede a capacidade da mesa.",
        });
      }

      // Cria a nova reserva
      await prisma.reserva.create({
        data: {
          data: dataReserva,
          n_pessoas: numeroPessoas,
          usuario: { connect: { id: req.usuarioId } },
          mesa: { connect: { id: numeroMesa } },
        },
      });

      res.status(201).json({
        erro: false,
        mensagem: "Mesa reservada com sucesso!",
      });
    } catch (err) {
      console.error("Erro ao criar reserva:", err);
      res.status(500).json({
        erro: true,
        mensagem: "Erro ao reservar mesa.",
      });
    }
  }
}

module.exports = ReservaController;

