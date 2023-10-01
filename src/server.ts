import express from "express";
import dotenv from "dotenv";
import mustacheExpress from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustacheExpress());

server.use(express.static(path.join(__dirname, "../public")));

//ROTAS
server.use(mainRoutes);

server.use((req, res) => {
  res.status(404).send("Página não encontrada!");
});

server.listen(process.env.PORT, () => {
  console.log("Rodando o servidor");
});
