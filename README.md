# Crash Course Typescript

Esse projeto foi criado para ensinar o básico da linguagem [Typescript](https://www.typescriptlang.org/) através de desafios que colocam em prática os principais códigos utilizados.

## Como uso o projeto?

Esse projeto contem algumas dependências para ele funcionar corretamente, como pre-requisito tenha instalado:

- Editor de código: [Visual Studio Code](https://code.visualstudio.com/)
- Terminal: [Git Bash](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/)

Após tudo instalado, use o terminal para entrar na pasta do projeto e use o comando:

```bash
$ npm install
```

Pronto, já pode começar a usar o projeto!

## Não sei nada e agora?

Fiz um [video]() explicando os principais conceitos do Typescript que foram escritos no arquivo `src/main.ts`, use ele para se guiar nos conceitos e tentar resolver os desafios

## Fazendo os desafios

Nesse projeto tem 15 exercícios graduais que te desafiarão no uso do Typescript. Os exercícios estão na pasta `src/desafios`, cada um, conta com uma descrição do problema a ser resolvido e um código inicial para ser alterado.

### Como vejo se acertei o desafio?

Todos os desafios possuem testes criados para validar o código que você fez

Para executar esses testes, use o terminal na pasta do projeto e execute

```bash
$ npm run test ex-01
```

Altere o final do comando para representar o desafio que quer testar

## Passos para criar um projeto do zero

Às vezes você vai querer criar um projeto novo do zero, siga o passo-a-passo

### Passo 1: Github (opcional)

Se quiser ter o projeto no github, vá ao site e crie um repositório e depois clone ele para sua máquina.

### Passo 2: Inicie o projeto

Use o terminal, vá até à pasta que o projeto vai ficar e use o comando:

```bash
$ npm init
```

### Passo 3: Adicionando o Typescript

Para usarmos o Typescript no projeto, temos que ter ele instalado na máquina, caso não tenha, execute o comando no terminal:

```bash
$ npm install -g typescript
```

Após instalado o Typescript, adicione ele no seu projeto, execute na pasta do seu projeto:

```bash
$ tsc --init
```

Após o comando será criado no seu projeto o arquivo `tsconfig.json`

### Passo 4: Configurando o Typescript

Precisamos adicionar umas configurações para o projeto Typescript funcionar corretamente

Abra o arquivo `tsconfig.json` e adicione no `compilerOptions` as configurações `outDir` e `sourceMap`, seu arquivo deve ficar assim:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true
  }
}
```

Crie uma pasta chamada `src` e dentro crie um arquivo chamado `main.ts`, esse vai seu arquivo inicial do projeto

Agora precisamos criar um comando para executar o projeto, abra o arquivo `package.json` e adicione as linhas no `script`:

```json
"scripts": {
    "dev": "tsc && node dist/main.js",
    "build": "tsc"
},
```

Por fim, abra o terminal, vá para a pasta do projeto e execute o comando:

```bash
$ npm install typescript --save-dev
```

### Passo 5: Instalando dependências

Para rodar o projeto pela primeira vez, abra o terminal e execute o comando na pasta do projeto:

```bash
$ npm install
```

Isso só deve ser feito quando o projeto nunca foi rodado ou quando temos dependências novas.

### Passo 6: Rodando o projeto

No terminal, na pasta do projeto, execute:

```bash
$ npm run dev
```

Pronto, projeto está criado e configurado para o uso do Typescript!

## Referencias

- [TypeScript para o Novo Programador](https://www.typescriptlang.org/pt/docs/handbook/typescript-from-scratch.html)
- [Trabalhando com listas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Enum](https://www.typescriptlang.org/docs/handbook/enums.html)
