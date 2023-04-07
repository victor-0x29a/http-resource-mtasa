

function handleRequest(commandName, ...)
    args = {...}
    argsSerializado = {}
    index = 1
    for i, _ in ipairs(args) do 
        for y, _ in ipairs(args[i]) do 
            table.insert(argsSerializado, index, args[i][y])
            index = index + 1
        end
    end
    if not listaComandos[commandName] then 
        return "Comando nao encontrado"
    end
    return listaComandos[commandName](argsSerializado)
end