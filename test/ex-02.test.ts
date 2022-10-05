import {
  mostraNome,
  mostraIdade,
  mostraApresentacao,
} from "../src/desafios/ex-02";

describe("Testando mostraNome", () => {
  it("Meu nome é Maria", () => {
    expect(mostraNome("Maria")).toBe("Meu nome é Maria");
  });

  it("Meu nome é João", () => {
    expect(mostraNome("João")).toBe("Meu nome é João");
  });
});

describe("Testando mostraIdade", () => {
  it("Minha idade é 20 anos", () => {
    expect(mostraIdade(20)).toBe("Minha idade é 20 anos");
  });

  it("Minha idade é 50 anos", () => {
    expect(mostraIdade(50)).toBe("Minha idade é 50 anos");
  });
});

describe("Testando mostraApresentacao", () => {
  it("Meu nome é Maria e tenho 20 anos", () => {
    expect(mostraApresentacao("Maria", 20)).toBe(
      "Meu nome é Maria e tenho 20 anos"
    );
  });

  it("Meu nome é João e tenho 50 anos", () => {
    expect(mostraApresentacao("João", 50)).toBe(
      "Meu nome é João e tenho 50 anos"
    );
  });
});
