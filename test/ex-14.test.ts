import {
  Sala,
  Aluno,
  Prova,
  Materia,
  pegaMelhorAlunoDeMatematicaDaSala,
} from "../src/desafios/ex-14";

describe("Testando pegaMelhorAlunoDeMatematicaDaSala", () => {
  it("Testando com melhor aluno sendo Maria", () => {
    let sala: Sala = {
      nome: "6B",
      alunos: [
        {
          nome: "João",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 10,
            },
            {
              materia: Materia.Port,
              nota: 6,
            },
            {
              materia: Materia.Port,
              nota: 8,
            },
            {
              materia: Materia.Mat,
              nota: 0,
            },
          ],
        },
        {
          nome: "Maria",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 10,
            },
            {
              materia: Materia.Port,
              nota: 2,
            },
            {
              materia: Materia.Mat,
              nota: 8,
            },
            {
              materia: Materia.Port,
              nota: 3,
            },
          ],
        },
        {
          nome: "Julia",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 3,
            },
            {
              materia: Materia.Port,
              nota: 5,
            },
            {
              materia: Materia.Port,
              nota: 8,
            },
            {
              materia: Materia.Mat,
              nota: 5,
            },
          ],
        },
      ],
    };
    expect(pegaMelhorAlunoDeMatematicaDaSala(sala)).toBe("Maria");
  });

  it("Testando com melhor aluno sendo Julia", () => {
    let sala: Sala = {
      nome: "6B",
      alunos: [
        {
          nome: "João",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 10,
            },
            {
              materia: Materia.Port,
              nota: 6,
            },
            {
              materia: Materia.Port,
              nota: 8,
            },
            {
              materia: Materia.Mat,
              nota: 0,
            },
          ],
        },
        {
          nome: "Maria",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 10,
            },
            {
              materia: Materia.Port,
              nota: 2,
            },
            {
              materia: Materia.Mat,
              nota: 8,
            },
            {
              materia: Materia.Port,
              nota: 3,
            },
          ],
        },
        {
          nome: "Julia",
          idade: 12,
          provas: [
            {
              materia: Materia.Mat,
              nota: 10,
            },
            {
              materia: Materia.Port,
              nota: 5,
            },
            {
              materia: Materia.Port,
              nota: 8,
            },
            {
              materia: Materia.Mat,
              nota: 10,
            },
          ],
        },
      ],
    };
    expect(pegaMelhorAlunoDeMatematicaDaSala(sala)).toBe("Julia");
  });
});
