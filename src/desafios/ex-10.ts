/****************************************************************

EXERCICIO 10

Será passado uma lista de alimentos respeitando 
a interface "Alimento"
Faça a função "pegaTotalDeProteinas" retornar quantos alimentos
da lista passada são da categoria "Proteina"

Exemplo:
Lista de alimentos = [
  {
    nome = "cenoura",
    categoria = Carboidrato
  },{
    nome = "ovo",
    categoria = Proteina
  },{
    nome = "carne",
    categoria = Proteina
  }
]

Chamando a função pegaTotalDeProteinas o valor
que deverá ser retornado é 2
já que o ovo e a carne são da categoria Proteina

****************************************************************/
export interface Alimento {
  nome: string;
  categoria: Categoria;
}

export enum Categoria {
  Proteina,
  Carboidrato,
  Gordura,
}

export function pegaTotalDeProteinas(alimentos: Array<Alimento>): number {
  return 0;
}
