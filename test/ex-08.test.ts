import { pegaNome, pegaIdade, Usuario } from "../src/desafios/ex-08";

describe("Testando com Maria de 20 anos", () => {
  let maria: Usuario = {
    nome: "Maria",
    idade: 20,
  };

  it("Testando pegaNome", () => {
    expect(pegaNome(maria)).toBe("Maria");
  });

  it("Testando pegaIdade", () => {
    expect(pegaIdade(maria)).toBe(20);
  });
});

describe("Testando com Mario de 50 anos", () => {
  let maria: Usuario = {
    nome: "Mario",
    idade: 50,
  };

  it("Testando pegaNome", () => {
    expect(pegaNome(maria)).toBe("Mario");
  });

  it("Testando pegaIdade", () => {
    expect(pegaIdade(maria)).toBe(50);
  });
});
