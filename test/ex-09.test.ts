import { Cliente, cadastraCliente } from "../src/desafios/ex-09";

describe("Testando cadastraCliente", () => {
  it("Testando cadastro da Maria loja centro", () => {
    let cliente: Cliente = {
      nome: "Maria",
      loja: "Centro",
    };
    expect(cadastraCliente(cliente.nome, cliente.loja)).toEqual(cliente);
  });

  it("Testando cadastro da Diego loja bairro", () => {
    let cliente: Cliente = {
      nome: "Diego",
      loja: "Bairro",
    };
    expect(cadastraCliente(cliente.nome, cliente.loja)).toEqual(cliente);
  });
});
