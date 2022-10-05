import { classificarNota } from "../src/desafios/ex-04";

describe("Testando classificarNota", () => {
  it("Testando classificação A com nota 10", () => {
    expect(classificarNota(10)).toBe("A+");
  });

  it("Testando classificação A com nota 9", () => {
    expect(classificarNota(9)).toBe("A");
  });

  it("Testando classificação A com nota 8", () => {
    expect(classificarNota(8)).toBe("A");
  });

  it("Testando classificação A com nota 7", () => {
    expect(classificarNota(7)).toBe("B");
  });

  it("Testando classificação A com nota 6", () => {
    expect(classificarNota(6)).toBe("B");
  });

  it("Testando classificação A com nota 5", () => {
    expect(classificarNota(5)).toBe("C");
  });

  it("Testando classificação A com nota 4", () => {
    expect(classificarNota(4)).toBe("C");
  });

  it("Testando classificação A com nota 3", () => {
    expect(classificarNota(3)).toBe("D");
  });

  it("Testando classificação A com nota 2", () => {
    expect(classificarNota(2)).toBe("D");
  });

  it("Testando classificação A com nota 1", () => {
    expect(classificarNota(1)).toBe("E");
  });

  it("Testando classificação A com nota 0", () => {
    expect(classificarNota(0)).toBe("E");
  });
});
