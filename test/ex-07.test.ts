import { parOuImpar } from "../src/desafios/ex-07";

describe("Testando parOuImpar", () => {
  it("Testando número ímpar", () => {
    expect(parOuImpar(1)).toBe("Ímpar");
  });

  it("Testando número par", () => {
    expect(parOuImpar(4)).toBe("Par");
  });
});
