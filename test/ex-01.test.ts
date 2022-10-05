import { mostraBoasVindas } from "../src/desafios/ex-01";

describe("Testando mostraBoasVindas", () => {
  it("Seja bem vindo", () => {
    expect(mostraBoasVindas()).toBe("Seja bem vindo");
  });
});
