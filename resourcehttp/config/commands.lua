

listaComandos = {["Set hour"] = function(...) 
    args = {...}
    setTime(args[1][1], 0)
    return "Horario alterado!"
end}