import {
  Aluno,
  Prova,
  Materia,
  calculaMediaDePortugues,
} from "../src/desafios/ex-11";

describe("Testando calculaMediaDePortugues", () => {
  it("Testando aluno com media 10", () => {
    let aluno: Aluno = {
      nome: "Maria",
      idade: 15,
      provas: [
        {
          materia: Materia.Mat,
          nota: 10,
        },
        {
          materia: Materia.Port,
          nota: 10,
        },
        {
          materia: Materia.Port,
          nota: 10,
        },
        {
          materia: Materia.Mat,
          nota: 10,
        },
      ],
    };
    expect(calculaMediaDePortugues(aluno)).toBe(10);
  });

  it("Testando aluno com media 5", () => {
    let aluno: Aluno = {
      nome: "Mario",
      idade: 13,
      provas: [
        {
          materia: Materia.Mat,
          nota: 8,
        },
        {
          materia: Materia.Port,
          nota: 8,
        },
        {
          materia: Materia.Port,
          nota: 3,
        },
        {
          materia: Materia.Mat,
          nota: 10,
        },
        {
          materia: Materia.Port,
          nota: 4,
        },
      ],
    };
    expect(calculaMediaDePortugues(aluno)).toBe(5);
  });
});
