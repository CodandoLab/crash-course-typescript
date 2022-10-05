import { descobreMinimo } from "../src/desafios/ex-06";

describe("Testando descobreMinimo", () => {
  it("Testando lista: 43, 21, 15, 3, 87", () => {
    expect(descobreMinimo([43, 21, 15, 3, 87])).toBe(3);
  });

  it("Testando lista: 134, 432, 654, 2134", () => {
    expect(descobreMinimo([134, 432, 654, 2134])).toBe(134);
  });
});
