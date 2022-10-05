import { soma, subtracao, multiplicacao, divisao } from "../src/desafios/ex-03";

describe("Testando soma", () => {
  it("2 + 3 = 5", () => {
    expect(soma(2, 3)).toBe(5);
  });

  it("10 + 25 = 35", () => {
    expect(soma(10, 25)).toBe(35);
  });
});

describe("Testando subtração", () => {
  it("10 - 5 = 5", () => {
    expect(subtracao(10, 5)).toBe(5);
  });

  it("50 - 33 = 17", () => {
    expect(subtracao(50, 33)).toBe(17);
  });
});

describe("Testando multiplicação", () => {
  it("3 x 5 = 15", () => {
    expect(multiplicacao(3, 5)).toBe(15);
  });

  it("10 x 6 = 60", () => {
    expect(multiplicacao(10, 6)).toBe(60);
  });
});

describe("Testando divisão", () => {
  it("9 ÷ 3 = 3", () => {
    expect(divisao(9, 3)).toBe(3);
  });

  it("10 ÷ 2 = 5", () => {
    expect(divisao(10, 2)).toBe(5);
  });
});
