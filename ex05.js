/*
Crie um array no seu programa, com o nome `listaDeConvidados`, e adicione o objeto criado no exercício anterior (basta apenas inicializar o array com o objeto - não precisa chamar a função “push”). Exemplo:

```js
var lista = [objeto]
```

Este array vai ser utilizado para adicionar os demais convidados
*/

// Código do exercício anterior
const convidado1 = {
  nome: "José",
  sobrenome: "Carlos",
  setor: "camarote",
  idade: 19,
};

const convidado2 = {
  nome: "Alessandro",
  sobrenome: "Viana",
  setor: "camarote",
  idade: 17,
};

const convidado3 = {
  nome: "Paula",
  sobrenome: "Souza",
  setor: "pista",
  idade: 22,
};

const convidado4 = {
  nome: "Cristian",
  sobrenome: "Schimit",
  setor: "pista",
  idade: 28,
};

const convidado5 = {
  nome: "Beatriz",
  sobrenome: "Viana",
  setor: "arquibancada",
  idade: 16,
};

const convidado6 = {
  nome: "Cláudia",
  sobrenome: "Torres",
  setor: "arquibancada",
  idade: 33,
};

/*
================================== RESOLUÇÃO ==================================================
  
  Apesar de estar confuso o enunciado do exercício, o objetivo aqui era fazer o array com todos
objetos criados no exercício anterior.

  Vou copiar os objetos para este arquivo e adicionar ao array listaDeConvidados
*/

// pode usar var, let ou const.
const listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
];
