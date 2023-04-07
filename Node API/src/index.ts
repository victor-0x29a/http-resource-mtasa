import Server from "./Server";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

try {
  Server.listen(process.env.EXPRESSPORT);
  console.log(`API Rodando na porta ${process.env.EXPRESSPORT}`);
} catch (e) {
  console.log("Houve um erro ao iniciar a API!");
}
