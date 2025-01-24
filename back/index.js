const express = require("express");
const cors = require("cors");
const app = express();
const AuthController = require("./controllers/AuthController");

app.use(cors()); 
app.use(express.json());

// Importando rotas
const authRoutes = require("./routes/authRoutes");
const perfilRoutes = require("./routes/perfilRoutes");
const mesaRoutes = require("./routes/MesaRoutes"); 
const reservaRoutes = require("./routes/reservaRoutes"); 

// Configurar rotas
app.use("/auth", authRoutes);
app.use("/perfil", AuthController.verificaAutenticacao, perfilRoutes);
app.use("/mesa", AuthController.verificaAutenticacao, mesaRoutes);
app.use("/reservas", AuthController.verificaAutenticacao, reservaRoutes);


app.get("/privado", AuthController.verificaAutenticacao, (req, res) => {
  res.json({
    msg: "Você acessou uma rota restrita!",
  });
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
