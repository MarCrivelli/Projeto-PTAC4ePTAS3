const express = require("express");
const cors = require("cors"); // Importando o cors

const app = express();

const AuthController = require("./controllers/AuthController")

// Configurando o CORS para permitir requisições do front-end
//app.use(cors());

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const perfilROutes = require("./routes/perfilRoutes")
app.use("/perfil", AuthController.verificaAutenticacao, perfilRoutes);

app.get("/privado", AuthController.verificaAutenticacao, (req, res) => {
  res.json({
    msg: "você acessou uma rota restrita"
  });
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
