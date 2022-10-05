/****************************************************************

EXERCICIO 08

Será passado a interface "Usuario" para função "pegaNome", 
faça ela retornar a string referente ao nome na interface

Será passado a interface "Usuario" para função "pegaIdade", 
faça ela retornar o number referente a idade na interface

Exemplo:

Parâmetro "usuario" = Usuario({
  nome: "Maria",
  idade: 20
})

Chamando a função pegaNome o valor
que deverá ser retornado é "Maria"

****************************************************************/
export interface Usuario {
  nome: string;
  idade: number;
}

export function pegaNome(usuario: Usuario): string {
  return "";
}

export function pegaIdade(usuario: Usuario): number {
  return 0;
}
