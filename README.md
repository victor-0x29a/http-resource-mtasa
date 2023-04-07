# http-resource-mtasa





## Configurações antes de começar
###### Confira se a porta padrão TCP no arquivo `mtaserver.conf` está `22005`;
###### Crie um usuário dentro do servidor dentro da ACL de administrador e coloque as informações dele dentro do arquivo `.env` na pasta `Node API`, com o nome de usuário no campo `MTASAUSER` e senha no campo `MTASAPASS`;
###### No arquivo `.env` na pasta `Node API`, configure o endereço IP do servidor no campo `MTASAHOST` e a porta `TCP` configurada anteriormente no campo `MTASAPORT`;

<br/>

## Como adicionar mais comandos?

###### Para criar novos comandos vai na pasta do `resource` e entre na pasta `config`, lá vai haver uma table contendo as funções, para adicionar uma nova função, basta colocar uma vírgula no fim da última função e adicionar o nome dela entre `[]` em seguida agregue uma função no nome referenciado dentro dos colchetes recebendo como argumento principal os três pontos (`...`) para referenciar que é uma table, segue o exemplo:

```lua
  end, ["nova function"] = function (...)
    args = {...}
    ...
  end
```

###### Após isso é só determinar os argumentos, vamos usar o exemplo que já está nos arquivos, no caso setar a hora, basta criar uma variável pegando a hora como primeiro argumento dos args, em seguida basta dar um setTime(`hora`, 0) e dar um return com alguma mensagem, segue o exemplo:

```lua
  end, ["nova function"] = function (...)
    args = {...}
    hora = args[1][1]
    setTime(hora, 0)
    return "Ok, mudou o time."
  end
```

###### Agora a função já está adicionada, tendo somente um argumento, agora para adicionar na lista da API basta ir no arquivo `commands.ts` dentro do diretório `src/config`, adicionar um novo objeto dentro da array `commands`, tendo ID, NAME, DESCRIPTION e ARGS. O `ID` deve ser de acordo com o `length` da array de comandos, no caso sequencial (0, 1, 2...), o `name` é o nome da função, com base no exemplo anterior o nome ficaria '`nova function`', na `description` basta dizer oque ela faz e por fim nos `args` basta colocar os argumentos de forma sequencial de acordo como você busca la no `resource`, como só queremos um valor númérico que vai fazer referência a hora, basta colocar um nome referente no caso `hora` mesmo, segue o exemplo:

```typescript
  {
    id: 1, // ID unico do comando
    name: "nova function", // Nome do comando
    description: "Seta a hora no game!", // Descricao do comando
    args: ["hora"], // Argumentos de acordo com a ordem cronologica [hora = 1 primeiro argumento]
  },
```

<br/>

## Venha fazer parte do B.R.R
[<img alt="alt_text" width="40px" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" />](https://discord.gg/3XeQBzNMHz)

