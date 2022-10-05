/****************************************************************

EXERCICIO 09

Será passado um nome e loja (ambos strings) 
para função "cadastraCliente", crie a interface "Cliente" 
com esses dois dados e faça a função retornar a interface
"Cliente" com os dados recebidos pela função

Exemplo:

Parâmetro "nome" = "Maria"
Parâmetro "loja" = "Centro"

Chamando a função cadastraCliente o valor
que deverá ser retornado é a interface Cliente
com os valores:
{
  nome = "Maria",
  loja = "Centro"
}

****************************************************************/
// export interface Cliente {}
export interface Cliente {
  nome: string;
  loja: string;
}

export function cadastraCliente(nome: string, loja: string): Cliente {
  let cliente: Cliente = { nome: "", loja: "" };
  return cliente;
}
