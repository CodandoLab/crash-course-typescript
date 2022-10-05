/****************************************************************

EXERCICIO 12

Será passado uma lista de filmes respeitando a interface "Filme",
cada "Filme" pode ou não ter uma classificação cadastrada,
faça a função "pegaFilmesSemClassificacao" identificar todos 
filmes sem classificação e retornar uma lista com eles

Exemplo:

Filme 1:
  nome = "Como se fosse a primeira vez"
  classificacao = Livre

Filme 2:
  nome = "Deadpool"

Chamando a função pegaFilmesSemClassificacao com esses filmes
deverá ser retornado uma lista só com o filme 2, já que nele não
tem uma classificação

****************************************************************/
export interface Filme {
  nome: string;
  classificacao?: Classificacao;
}

export enum Classificacao {
  Livre,
  Juvenil,
  Adulto,
}

export function pegaFilmesSemClassificacao(filmes: Array<Filme>): Array<Filme> {
  let arr: Array<Filme> = [];
  return arr;
}
