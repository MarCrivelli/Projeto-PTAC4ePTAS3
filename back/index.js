const express = require("express");
const cors = require("cors"); // Importando o cors

const app = express();

// Configurando o CORS para permitir requisições do front-end
app.use(cors({
  origin: "http://localhost:3000" // Permitir apenas o domínio do front-end
}));

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
