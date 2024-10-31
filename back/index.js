const { PrismaCLient } = require("@prisma/client");
	const prisma = new PrismaClient();
	
	const express = require("express");

	const app = express();
	app.use(express.json());
	
	//rotas
	const authRoutes = require("./routes/authRoutes");
	app.use("/auth", authRoutes);
	
	app.listen(8000);