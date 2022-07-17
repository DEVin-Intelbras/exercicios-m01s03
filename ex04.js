/*
[M1S03] Ex 4 - Projeto: iniciando

Vamos desenvolver um sistema simples para identificar qual o setor de cada um dos convidados de um evento: **camarote**, **pista** ou **arquibancada**

O objeto para representar uma pessoa convidada deve conter as seguintes propriedades:

- nome
- sobrenome
- setor (”camarote”, “pista”, “arquibancada”)
- idade

Crie ao menos 2 objetos para cada **setor**, variando o **nome**, **sobrenome** e **idade** ao seu gosto. Sugiro usar idades maiores e menores de 18 anos para podermos brincar com estruturas de controle condicionais.
*/

/*
================================== RESOLUÇÃO ==================================================
  
  Usando a literal de objeto apresentado em aula, vou criar 2 objetos para cada setor, e vou inventar os demais dados
*/

// pode usar var, let ou const...
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
