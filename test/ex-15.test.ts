import {
  Voto,
  Candidato,
  CandidatoApurado,
  pegaCandidatoEleito,
} from "../src/desafios/ex-15";

describe("Testando pegaCandidatoEleito", () => {
  let maria: Candidato = {
    nome: "Maria",
  };

  let jorge: Candidato = {
    nome: "Jorge",
  };

  it("Testando com Maria sendo eleita", () => {
    let votos: Array<Voto> = [
      { candidato: maria },
      { candidato: jorge },
      { candidato: maria },
      { candidato: maria },
      { candidato: maria },
      { candidato: maria },
    ];

    let expectCandidato: CandidatoApurado = {
      nome: "Maria",
      votos: 5,
    };

    expect(pegaCandidatoEleito(votos)).toEqual(expectCandidato);
  });

  it("Testando com Jorge sendo eleito", () => {
    let votos: Array<Voto> = [
      { candidato: maria },
      { candidato: jorge },
      { candidato: maria },
      { candidato: jorge },
      { candidato: jorge },
      { candidato: jorge },
    ];

    let expectCandidato: CandidatoApurado = {
      nome: "Jorge",
      votos: 4,
    };

    expect(pegaCandidatoEleito(votos)).toEqual(expectCandidato);
  });
});
