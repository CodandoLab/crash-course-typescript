/****************************************************************

EXERCICIO 13

Será passado uma lista de alunos respeitando a interface "Aluno"
cada aluno tem uma lista de desafios respeitando 
a interface "Desafio", nesse desafio temos a verificação que mostra
se o aluno acertou ou não esse desafio, esse valor só pode ser
verdadeiro ou falso

Faça a função "pegaAlunosAprovados" identificar todos os alunos
que acertaram mais que 5 desafios e retorne a lista desses alunos

Exemplo:
Aluno 1 = 5 acertos
Aluno 2 = 6 acertos
Aluno 3 = 7 acertos

Chamando a função pegaAlunosAprovados com esses alunos
deverá ser retornada uma lista com os alunos 2 e 3

****************************************************************/
export interface Aluno {
  nome: string;
  desafios: Array<Desafio>;
}

export interface Desafio {
  estaCerto: Boolean;
}

export function pegaAlunosAprovados(alunos: Array<Aluno>): Array<Aluno> {
  let arr: Array<Aluno> = [];
  return arr;
}
