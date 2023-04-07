# http-resource-mtasa





## Configurações antes de começar
###### Confira se a porta padrão TCP no arquivo `mtaserver.conf` está `22005`;
###### Crie um usuário dentro do servidor dentro da ACL de administrador e coloque as informações dele dentro do arquivo `.env` na pasta `Node API`, com o nome de usuário no campo `MTASAUSER` e senha no campo `MTASAPASS`;
###### No arquivo `.env` na pasta `Node API`, configure o endereço IP do servidor no campo `MTASAHOST` e a porta `TCP` configurada anteriormente no campo `MTASAPORT`;

<br>

## Como adicionar mais comandos?

###### Para criar novos comandos vai na pasta do `resource` e entre na pasta `config`, lá vai haver uma table contendo as funções, para adicionar uma nova função, basta colocar uma vírgula no fim da última função e adicionar o nome dela entre `[]` em seguida agregue uma função no nome referenciado dentro dos colchetes recebendo como argumento principal os três pontos (`...`) para referenciar que é uma table, segue o exemplo:

```lua
  end, ["nova function"] = function (...)
    args = {...}
    ...
  end
```

