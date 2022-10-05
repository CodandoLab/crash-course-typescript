import { Aluno, pegaAlunosAprovados } from "../src/desafios/ex-13";

describe("Testando pegaAlunosAprovados", () => {
  it("Testando com 4 alunos aprovados", () => {
    let alunos: Array<Aluno> = [
      {
        nome: "Aluno 1",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 2",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 3",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 4",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
    ];
    let expectAlunos: Array<Aluno> = [
      {
        nome: "Aluno 1",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 2",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 3",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 4",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
    ];
    expect(pegaAlunosAprovados(alunos)).toEqual(expectAlunos);
  });

  it("Testando com 1 aluno aprovado", () => {
    let alunos: Array<Aluno> = [
      {
        nome: "Aluno 1",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 2",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 3",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
      {
        nome: "Aluno 4",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
    ];
    let expectAlunos: Array<Aluno> = [
      {
        nome: "Aluno 2",
        desafios: [
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
          { estaCerto: true },
        ],
      },
    ];
    expect(pegaAlunosAprovados(alunos)).toEqual(expectAlunos);
  });
});
