// Crash Course Typescript

////////////////////////////////////////////////////
// Comentário

// Use duas barras para comentar, ele não é lido pelo programa

// Mostrar algo no terminal
console.log("Oi!");

////////////////////////////////////////////////////
// Variáveis
let texto: string = ""; // <-- Variável tipo texto, sempre entre aspas
let numero: number = 0; // <-- Variável tipo número
let numeroDecimal: number = 0.1; // <-- Variável tipo número, pode ser decimal
let logico: boolean = true; // <-- Variável tipo lógico (verdadeiro ou falso) (true ou false)

let qualquerCoisa: any = true; // <-- Variável sem tipo, aceita qualquer valor

let semDefinicao = undefined; // <-- Variável sem valor definido
let nulo = null; // <-- Variável com o valor nulo

////////////////////////////////////////////////////
// Usando uma variável
let oi: string = "Oi! Estou em uma variável!";
console.log(oi); // <-- Mostra o valor da variável oi

////////////////////////////////////////////////////
// Alterando uma variável
let total = 0; // Variável começa com o valor 0

total = 3; // Variável muda de valor para 3
console.log(total); // Mostra o valor do total, 3

total = total + 5; // Adiciona 5 no valor atual do total
console.log(total); // Mostra o valor do total, 3 + 5

////////////////////////////////////////////////////
// Função

// O código da função sempre fica entre {}
function mostraMensagem() {
  console.log("Oi! A função executou!");
} // <-- terminou o código da função

mostraMensagem(); // <-- Como eu peço para executar uma função

////////////////////////////////////////////////////
// Função com variável

// As variáveis que uma funções sempre fica ()
function mostraNome(nome: string) {
  console.log("Oi " + nome + "!");
}

/*
Passar valores para função sempre devo colocar entre (), 
caso não tenha valores nenhum a serem passados deixamos os () vazios

Cada valor tem um nome e seu tipo, separado por :
*/

mostraNome("Maria"); // <-- Chamo a função com o valor que quero como nome

////////////////////////////////////////////////////
// Função com variável e retorno
function soma(a: number, b: number): number {
  return a + b;
}

let resultado = soma(3, 4); // <-- Guarda resultado na variável
console.log(resultado);

console.log("3 + 4 = " + resultado); // <-- Construindo o texto com +
console.log(`3 + 4 = ${resultado}`); // <-- Construindo o texto com ``

////////////////////////////////////////////////////
// Operações matemáticas
let a = 10;
let b = 5;

console.log(a + b); // Conta de mais. Usamos +
console.log(a - b); // Conta de menos. Usamos -
console.log(a * b); // Conta de multiplicação. Usamos *
console.log(a / b); // Conta de divisão. Usamos /
console.log(a % b); // divisão, mas retorna o resto. Usamos %

////////////////////////////////////////////////////
// Operações lógicas
let c = 10;
let d = 5;
let e = 10;

console.log(c > d); // Compara se C é maior que D
console.log(c >= d); // Compara se C é maior ou igual a D
console.log(c >= e); // Compara se C é maior ou igual a E
console.log(c < e); // Compara se C é menor que D
console.log(c <= e); // Compara se C é menor ou igual a E
console.log(c == d); // Compara se C é igual a D
console.log(c == e); // Compara se C é igual a E
console.log(c != d); // Compara se C é diferente que D
console.log(c != e); // Compara se C é diferente que E

////////////////////////////////////////////////////
// Juntando operadores lógicos
let x = 9;
console.log(x < 10 || x == 15); // Quando usamos || quer dizer OU

x = 15;
console.log(x < 10 || x == 15);

x = 5;
console.log(x > 10 && x < 100); // Quando usamos && quer dizer E

x = 50;
console.log(x > 10 && x < 100);

////////////////////////////////////////////////////
// Condicionais

/*
  Se a variável A for maior que 10, vai ser executada a linha 126
  se não for será executada a linha 129
*/
function eMaiorQueDez(a: number): string {
  if (a > 10) {
    return `${a} é maior que 10`;
  } else {
    return `${a} não é maior que 10`;
  }
}

let mensagem1 = eMaiorQueDez(5);
console.log(mensagem1);

let mensagem2 = eMaiorQueDez(15);
console.log(mensagem2);

////////////////////////////////////////////////////
// Condicionais encadeados

/*
  Podemos usar o else if para adicionar mais condições no código
*/
function eMaiorMenorOuIgualDez(a: number): string {
  if (a > 10) {
    return `${a} é maior que 10`;
  } else if (a < 10) {
    return `${a} é menor que 10`;
  } else {
    return `O número é 10!`;
  }
}

console.log(eMaiorMenorOuIgualDez(5));
console.log(eMaiorMenorOuIgualDez(15));
console.log(eMaiorMenorOuIgualDez(10));

////////////////////////////////////////////////////
// Compara casos

/*
  O uso do switch case, faz várias comparações
  de uma forma mais fácil
*/
function mostraValorDaFruta(fruta: string) {
  switch (fruta) {
    case "Banana":
      console.log("A banana custa R$ 0,59");
      break;
    case "Maça":
      console.log("A maça custa R$ 2,14");
      break;
    default:
      console.log("Não temos essa fruta...");
      break;
  }
}

mostraValorDaFruta("Maça");
mostraValorDaFruta("Banana");
mostraValorDaFruta("Uva");

////////////////////////////////////////////////////
// Listas
let lista: Array<string> = ["Banana", "Maça", "Uva"]; // Array é o tipo para listas

console.log(lista[1]); // Posição 1 da lista, vai mostrar Maça
console.log(lista[0]); // Posição 0 da lista, vai mostrar Banana

////////////////////////////////////////////////////
// Loop em listas
let frutas: Array<string> = ["Banana", "Maça", "Uva"];

frutas.forEach((item) => {
  console.log(item); // Vai mostrar todas as frutas
});

////////////////////////////////////////////////////
// Trabalhando com listas
let compras: Array<string> = []; // Inicia uma lista vazia
console.log(compras); // Mostra a lista vazia

compras.push("Arroz"); // Adiciona um item na lista
console.log(compras); // Mostra a lista com o arroz

compras.push("Feijão"); // Adiciona mais um item na lista
console.log(compras); // Mostra a lista com dois itens

console.log(compras.length); // Mostra tamanho da lista

function procuraItem(lista: Array<string>, itemBusca: string): number {
  return lista.findIndex((item) => item == itemBusca); // Item da lista comparando com o itemBusca
}

console.log(procuraItem(compras, "Arroz")); // Vai mostrar o 0, já que o Arroz é o primeiro item da lista

////////////////////////////////////////////////////
// Objetos
let aluno = {
  nome: "Maria",
  idade: 20,
};

console.log(aluno.nome); // Mostra o nome, Maria
console.log(aluno.idade); // Mostra a idade, 20

////////////////////////////////////////////////////
// Usando interface
interface Aluno {
  nome: string;
}

// Usar interface obriga todo aluno ter um nome cadastrado
function mostraNomeAluno(aluno: Aluno) {
  console.log(aluno.nome);
}

mostraNomeAluno({
  nome: "Maria",
});

////////////////////////////////////////////////////
// Enum
enum Sabor {
  Acido,
  Doce,
  Salgado,
  Azedo,
}

let saborFruta: Sabor = Sabor.Doce; // Obriga o valor ser um dos 4 sabores

////////////////////////////////////////////////////
// Classes

/*
  Usado para unir variáveis e funções de uma forma
  fácil para ser compartilhada em projetos grandes
*/
class Gato {
  nome: String;
  raca: String;

  constructor(nome: string, raca: string) {
    this.nome = nome;
    this.raca = raca;
  }

  digaOi() {
    console.log("Miau!");
  }
}

let salem = new Gato("Salem", "Siamês"); // Registrando um gato
console.log(salem.nome); // Mostra o nome do Salem
console.log(salem.raca); // Mostra a raça do Salem
salem.digaOi(); // Salem dizendo oi
