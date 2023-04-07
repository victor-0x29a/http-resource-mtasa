import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import Rotas from "./Routes";

class Server {
  public App: express.Application;
  constructor(app: express.Application) {
    this.App = app;
    this.middleware();
    this.load();
  }
  private middleware(): void {
    this.App.use(bodyparser.urlencoded({ extended: true }));
    this.App.use(bodyparser.json());
    this.App.use(cors({ origin: true }));
  }
  private load(): void {
    this.App.use("/api", Rotas);
  }
}

export default new Server(express()).App;
