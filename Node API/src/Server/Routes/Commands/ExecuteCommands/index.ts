import express from "express";
import { commands } from "../../../../config/commands";
import { Client } from "mtasa";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default async function executeCommands(
  req: express.Request,
  res: express.Response
) {
  try {
    const Argumentos = req.body.args;
    try {
      const MTA: Client = new Client(
        process.env.MTASAHOST,
        Number(process.env.MTASAPORT),
        process.env.MTASAUSER,
        process.env.MTASAPASS,
        "http"
      );
      const response = await MTA.call(
        process.env.RESOURCENAME!,
        process.env.FUNCTIONNAME!,
        commands[req.body.id].name,
        Argumentos
      );
      return res.status(200).json({ ResponseMTA: response });
    } catch (e) {
      return res.status(503).json("Houve um erro fatal...");
    }
  } catch (e) {
    return res.status(500).json("Houve um erro...");
  }
}
