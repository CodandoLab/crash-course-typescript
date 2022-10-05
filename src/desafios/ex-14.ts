/****************************************************************

EXERCICIO 14

Será passado uma sala respeitando a interface "Sala",
nela contém uma lista de alunos, 
que por sua vez tem uma lista de provas
Faça a função "pegaMelhorAlunoDeMatematicaDaSala" calcular a media
de cada aluno em matematica como foi feito no ex-11, depois
identificar qual foi o aluno com maior media, retornando o nome dele

Exemplo:
Sala
  Aluno 1
    nome = Maria
    Prova 1 de matemática, nota 10
    Prova 2 de matemática, nota 10
  Aluno 2
    nome = Jorge
    Prova 1 de matemática, nota 8
    Prova 2 de matemática, nota 8

Chamando a função pegaMelhorAlunoDeMatematicaDaSala passando essa sala
o valor que deverá ser retornado é "Maria"

Pensando que
Media de maria é (10 + 10) / 2 = 10
e media de Jorge é (8 + 8) / 2 = 8

****************************************************************/
export interface Sala {
  nome: string;
  alunos: Array<Aluno>;
}

export interface Aluno {
  nome: string;
  idade: number;
  provas: Array<Prova>;
}

export interface Prova {
  materia: Materia;
  nota: number;
}

export enum Materia {
  Mat = "Matematica",
  Port = "Portugues",
}

export function pegaMelhorAlunoDeMatematicaDaSala(sala: Sala): string {
  return "";
}
