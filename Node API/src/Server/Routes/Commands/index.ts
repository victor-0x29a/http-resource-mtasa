import express from "express";
import getCommands from "./GetCommands";
import executeCommands from "./ExecuteCommands";

class Commands {
  public Router: express.Router;
  constructor(router: express.Router) {
    this.Router = router;
    this.load();
  }
  private load(): void {
    this.Router.get("/", getCommands);
    this.Router.post("/", executeCommands);
  }
}

export default new Commands(express.Router()).Router;
