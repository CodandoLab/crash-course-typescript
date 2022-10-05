import { somaTodos } from "../src/desafios/ex-05";

describe("Testando somaTodos", () => {
  it("Testando soma dos números 1, 2, 3, 4, 5", () => {
    expect(somaTodos([1, 2, 3, 4, 5])).toBe(15);
  });

  it("Testando soma dos números 10, 32, 12, 54, 32", () => {
    expect(somaTodos([10, 32, 12, 54, 32])).toBe(140);
  });
});
