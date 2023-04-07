import express from "express";
import Command from "./Commands";

class Rotas {
  public Router: express.Router;
  constructor(router: express.Router) {
    this.Router = router;
    this.load();
  }
  private load(): void {
    this.Router.use("/comandos", Command);
  }
}

export default new Rotas(express.Router()).Router;
