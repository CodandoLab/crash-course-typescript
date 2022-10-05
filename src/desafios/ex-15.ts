/****************************************************************

EXERCICIO 15

Será passado uma lista de votos respeitando 
a interface "Voto"
Faça a função "pegaCandidatoEleito" retornar um objeto
respeitando a interface "CandidatoApurado", com os
dados do candidato mais votado segundo a lista passada

Exemplo:
Lista de votos = [
  { nome = "Maria" },
  { nome = "Pedro" },
  { nome = "Maria" },
]

Chamando a função pegaCandidatoEleito o valor
que deverá ser retornado é:

CandidatoApurado = {
  nome = "Maria",
  votos = 2
}

Esse resultado é porque na lista de votos encontramos
dois votos para Maria e ela é a mais votada.

****************************************************************/
export interface Voto {
  candidato: Candidato;
}

export interface Candidato {
  nome: string;
}

export interface CandidatoApurado {
  nome: string;
  votos: number;
}

export function pegaCandidatoEleito(votos: Array<Voto>): CandidatoApurado {
  let candidatoEleito: CandidatoApurado = { nome: "", votos: 0 };
  return candidatoEleito;
}
