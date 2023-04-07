import { commandType } from "../types/commands";
export const commands: Array<commandType> = [
  {
    id: 0, // ID unico do comando
    name: "Set hour", // Nome do comando
    description: "Seta a hora no game!", // Descricao do comando
    args: ["hora"], // Argumentos de acordo com a ordem cronologica [hora = 1 primeiro argumento]
  },
];
