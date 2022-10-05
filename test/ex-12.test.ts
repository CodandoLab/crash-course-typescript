import {
  Filme,
  Classificacao,
  pegaFilmesSemClassificacao,
} from "../src/desafios/ex-12";

describe("Testando pegaFilmesSemClassificacao ", () => {
  it("Testando com 2 filmes", () => {
    let filmes: Array<Filme> = [
      {
        nome: "Como se fosse a primeira vez",
      },
      {
        nome: "Deadpool",
      },
      {
        nome: "Senhor dos aneis",
        classificacao: Classificacao.Juvenil,
      },
    ];
    let expectFilmes: Array<Filme> = [
      {
        nome: "Como se fosse a primeira vez",
      },
      {
        nome: "Deadpool",
      },
    ];
    expect(pegaFilmesSemClassificacao(filmes)).toEqual(expectFilmes);
  });

  it("Testando com nenhum filme", () => {
    let filmes: Array<Filme> = [
      {
        nome: "Como se fosse a primeira vez",
        classificacao: Classificacao.Livre,
      },
      {
        nome: "Deadpool",
        classificacao: Classificacao.Adulto,
      },
      {
        nome: "Senhor dos aneis",
        classificacao: Classificacao.Juvenil,
      },
    ];
    let expectFilmes: Array<Filme> = [];
    expect(pegaFilmesSemClassificacao(filmes)).toEqual(expectFilmes);
  });
});
