const prisma = require("../prisma/prismaClient");

class PerfilController {
    static async getPerfil(req, res) {
        try {
          const usuario = await prisma.usuario.findUnique({
            where: { id: req.usuarioId },
            select: {
              id: true,
              nome: true,
              email: true,
              tipo: true,
            },
          });
      
          if (!usuario) {
            return res.status(404).json({
              erro: true,
              mensagem: "Usuário não encontrado.",
            });
          }
      
          res.status(200).json({
            erro: false,
            usuario,
          });
        } catch (err) {
          res.status(500).json({
            erro: true,
            mensagem: "Erro ao buscar o perfil.",
          });
        }
      }
      //achar vários usuários
      static async puxarUsuarios(req, res) {
        try {
          const usuarios = await prisma.usuario.findAll({
            select: {
              id: true,
              nome: true,
              email: true,
              tipo: true,
            },
          });
      
          if (!usuarios) {
            return res.status(404).json({
              erro: true,
              mensagem: "Usuário não encontrado.",
            });
          }
      
          res.status(200).json({
            erro: false,
            usuarios,
          });
        } catch (err) {
          res.status(500).json({
            erro: true,
            mensagem: "Erro ao buscar o perfil.",
          });
        }
      }
      
//função de update
static async atualizaPerfil(req, res) {
    const { email, nome } = req.body.usuario;
  
    if (!email || !nome) {
      return res.status(400).json({
        erro: true,
        mensagem: "Nome e e-mail são obrigatórios.",
      });
    }
  
    try {
      const usuarioAtualizado = await prisma.usuario.update({
        where: { id: req.usuarioId },
        data: { email, nome },
      });
  
      res.status(200).json({
        erro: false,
        mensagem: "Perfil atualizado com sucesso!",
        usuario: {
          id: usuarioAtualizado.id,
          nome: usuarioAtualizado.nome,
          email: usuarioAtualizado.email,
        },
      });
    } catch (err) {
      res.status(500).json({
        erro: true,
        mensagem: "Erro ao atualizar o perfil.",
      });
    }
  }
  
}

module.exports = PerfilController;