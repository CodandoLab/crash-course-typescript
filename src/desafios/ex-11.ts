/****************************************************************

EXERCICIO 11

Será passado um aluno respeitando a interface "Aluno",
cada "Aluno", terá uma lista de provas, cada prova é referente
a interface "Prova" que terá uma categoria e nota, sendo 
a categoria referente ao enum "Materia" e a nota a um "number"

Faça a função "calculaMediaDePortugues" identificar todas as 
provas de português, somar e dividir as notas para encontrar 
a média que deverá ser retornada

Exemplo:
Aluno tem 2 provas de português

Prova 1, nota 6
Prova 2, nota 10

Media = (6 + 10) / 2

Chamando a função calculaMediaDePortugues com esse aluno
deverá ser retornado o valor 8

****************************************************************/
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

export function calculaMediaDePortugues(aluno: Aluno): number {
  return 0;
}
