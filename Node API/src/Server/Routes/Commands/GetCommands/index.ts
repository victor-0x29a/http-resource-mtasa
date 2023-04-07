import express from "express";
import { commands } from "../../../../config/commands";
export default function getCommands(
  req: express.Request,
  res: express.Response
) {
  const COMANDOS: any = commands;
  return res.status(200).json(COMANDOS);
}
