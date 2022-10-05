import {
  Alimento,
  Categoria,
  pegaTotalDeProteinas,
} from "../src/desafios/ex-10";

describe("Testando pegaTotalDeProteinas", () => {
  it("Testando com 3 proteínas", () => {
    let alimentos: Array<Alimento> = [
      {
        nome: "cenoura",
        categoria: Categoria.Carboidrato,
      },
      {
        nome: "batata",
        categoria: Categoria.Carboidrato,
      },
      {
        nome: "ovo",
        categoria: Categoria.Proteina,
      },
      {
        nome: "carne",
        categoria: Categoria.Proteina,
      },
    ];
    expect(pegaTotalDeProteinas(alimentos)).toBe(2);
  });

  it("Testando com nenhuma proteína", () => {
    let alimentos: Array<Alimento> = [
      {
        nome: "cenoura",
        categoria: Categoria.Carboidrato,
      },
      {
        nome: "batata",
        categoria: Categoria.Carboidrato,
      },
    ];
    expect(pegaTotalDeProteinas(alimentos)).toBe(0);
  });
});
