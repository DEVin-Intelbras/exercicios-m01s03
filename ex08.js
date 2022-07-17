/*
[M1S03] Ex 8 - Projeto: criando um HTML e manipulando a DOM

Agora que nossas funções de filtros estão prontas, vamos manipular o DOM e montar uma interface. Construa uma interface utilizando o mock up abaixo, ou, se preferir, pegue os códigos prontos HTML e CSS disponibilizados nos links.

(https://www.figma.com/file/BH3j77Y4EQcEINoeuBciDG/Mock-Exemplo-da-Lista?node-id=0%3A1) 

Capture cada uma das listas `ul` de cada uma das colunas da página HTML em uma variável utilizando um dos métodos document.getElementById (precisa adicionar um ID na tag HTML) ou document.querySelector (selecionar por uma das classes CSS). No código disponibilizado pelo professor, os elementos `ul` já possuem um ID.

Cada uma das funções `separarCamarote`, `separarPista` e `separarArquibancada` criadas no exercício 7 retorna um array de elementos filtrados. O seu desafio será fazer com que cada uma das colunas HTML exiba a lista de convidados com base no seu setor. Você pode utilizar o método `forEach` para iterar sobre cada objeto na lista e adicionar ao `innerHTML`um `li` com o nome completo do convidado (nome e sobrenome).

Códigos HTML e CSS de exemplo: [https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669](https://gist.github.com/mikansc/052c1494f7efdf0f90d818299dfdc669)
*/

/*
================================== RESOLUÇÃO ==================================================

  Este exercício utiliza todo o código escrito até aqui, adicionando agora a manipulação do DOM.
  Vou utilizar o layout que criei (HTML + CSS) para fazer a resolução. Primeiro, preciso capturar
o elemento de lista no HTML. No meu caso, é um <ul> com o id identificando o setor que o convidado
será organizado:
  1) <ul class="listaConvidados" id="listaCamarote">
  2) <ul class="listaConvidados" id="listaArquibancada">
  3) <ul class="listaConvidados" id="listaPista">

  Vou capturar cada um dos elementos em uma variável no escopo global para poder manipula-los dentro
de um forEach para cada um dos setores. A resolução começa na linha 122.

  Existem outras maneiras de fazer este mesmo código. Experimente!
*/

// código dos exercícios anteriores
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

const listaDeConvidados = [
  convidado1,
  convidado2,
  convidado3,
  convidado4,
  convidado5,
  convidado6,
];

function liberarBebidas(lista) {
  const resultado = lista.map((convidado) => {
    convidado.openBar = false;
    if (convidado.idade >= 18) {
      convidado.openBar = true;
    }
    return convidado;
  });
  return resultado;
}

const separarCamarote = (lista) => {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "camarote") {
      return true;
    } else {
      return false;
    }
  });
  return resultado;
};

const separarPista = (lista) => {
  return lista.filter((convidado) => {
    return convidado.setor === "pista" ? true : false;
  });
};

const separarArquibancada = (lista) => {
  return lista.filter((convidado) => convidado.setor === "arquibancada");
};

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

const listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);
const listaCamarote = separarCamarote(convidadosComBebidasProcessada);
const listaPista = separarPista(convidadosComBebidasProcessada);

// RESOLUÇÃO
//
// capturando os elementos no HTML
const ulArquibancadaEl = document.getElementById("listaArquibancada");
const ulPistaEl = document.getElementById("listaPista");
const ulCamaroteEl = document.getElementById("listaCamarote");

// esta função monta o nome da pessoa para ser exibido
// Criei apenas para facilitar a leitura dos forEach abaixo.
const montaNome = (objPessoa) => {
  return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};

// realizando o forEach
listaArquibancada.forEach((convidado) => {
  ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

listaCamarote.forEach((convidado) => {
  ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

listaPista.forEach((convidado) => {
  ulPistaEl.innerHTML += `<li>${montaNome(convidado)}</li>`;
});
