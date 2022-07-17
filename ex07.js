/**
[M1S03] Ex 7 - Projeto: funções e filtros de arrays

Crie três funções: `separarCamarote`, `separarPista` e `separarArquibancada`. 

Cada uma dessas funções deve receber uma lista como arumento e deve retornar essa lista filtrada constando somente os valores do setor camarote, pista e arquibancada (cada função deve retornar a lista com um dos setores).

Utilize para esta função o método `filter` de array. Exemplo:
    
    ```jsx
    function fazerUmFiltro(umaListaDeObjetos) {
      var listaFiltrada = umaListaDeObjetos.filter((objeto) => objeto.propriedade === "valor");
    	return listaFiltrada;
    }
    ```
    
Chame **cada uma das três funções**, passando como argumento a `convidadosComBebidasProcessada`; Salve **cada um dos resultados em uma variável diferente**. Exemplo

```jsx
// um exemplo com a função de camarote...
var listaCamarote = separarCamarote(convidadosComBebidasProcessada);
```
 */

// código do exercício anterior

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

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

/*
================================== RESOLUÇÃO ==================================================
  
  A resolução desta questão é muito similar à questão anterior, só que nós usaremos o método 
.filter para filtrar os resultados dos objetos.

  Assim como no map, o filter também cria um novo array como resultado. A diferença é que não
necessariamente este novo array terá o mesmo tamanho do array original - como é o caso do map.

  O método filter precisa retornar um valor booleano. Caso o return seja de um valor verdadeiro
(truthy), o objeto inteiro é adicionado no array resultante. Se o valor for falso (falsy), o
objeto é ignorado e não vai pro array resultante.
*/

// pode ser utilizado arrow function
//
// IMPORTANTE: mantenha o seu código coerente. Se você utilizou
// a sintaxe function, tente sempre utilizar a sintaxe function
// (a não ser em casos especiais) para declarar as funcões.
// Aqui, vou usar arrow function para fins didáticos!
const separarCamarote = (lista) => {
  const resultado = lista.filter((convidado) => {
    if (convidado.setor === "camarote") {
      return true; // se for camarote, retorna true para que o convidado seja adicionado ao array
    } else {
      return false; // caso contrário, retorna false para que ele seja "pulado" (não vai pro array)
    }
  });
  return resultado; // array filtrada!
};

/* !!!!!!!!!!!!!! BONUS !!!!!!!!!!!!!! BONUS !!!!!!!!!!!!!! BONUS !!!!!!!!!!!!!!
  
  Podemos implementar a mesma lógica, só que de formas diferentes! AS próximas duas
funções fazem EXATAMENTE a mesma coisa que a separarCamarote, mas notem a diferença
da sintaxe do algoritmo...
*/
const separarPista = (lista) => {
  // retornando o array direto, sem salvar em nova variável!
  return lista.filter((convidado) => {
    // usando o opeardor ternário para verificar igualdade (não se esqueça de retornar o resultado!)
    return convidado.setor === "pista" ? true : false;
  });
};

// Aqui, uma sintaxe usando o conceito de trutht e falsy values
// https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy
const separarArquibancada = (lista) => {
  return lista.filter((convidado) => convidado.setor === "arquibancada");
};

// essa mesma função, se usarmos o retorno implícito da arrow function
// let separarArquibancada = (lista) => lista.filter((c) => c.setor === "arquibancada");

/* !!!!!!!!!!!!!! BONUS 2 !!!!!!!!!!!!!! BONUS 2 !!!!!!!!!!!!!! BONUS 2 !!!!!!!!!!!!!!

  Você já ouviu falar do DRY? Dont Repeat Yourself
  
  Este não é um requerimento do exercício, mas podemos criar apenas uma função para filtrar
o setor. Percebam que as 3 tem exatamente o mesmo código, exceto pela verificação condicional
do setor:

  1) if (convidado.setor === "camarote") {
      return true; // se for camarote, retorna true para que o convidado seja adicionado ao array
    } else {
      return false; // caso contrário, retorna false para que ele seja "pulado" (não vai pro array)
    }

  2) convidado.setor === "pista" ? true : false

  3) convidado.setor === "arquibancada"

  E se a gente recebesse uma string como argumento indicando qual o setor queremos filtrar?
Será que poderíamos criar apenas uma função e reutilizar ela pra filtrar todos os setores?

Experimente este código:
*/

const filtrarPorSetor = (lista, setor) => {
  //                            \/ retorno implícito + conceito de truthy x falsy valye
  return lista.filter((conv) => conv.setor === setor);
};

// console.log(filtrarPorSetor(convidadosComBebidasProcessada, "arquibancada"));
// console.log(filtrarPorSetor(convidadosComBebidasProcessada, "pista"));
// console.log(filtrarPorSetor(convidadosComBebidasProcessada, "camarote"));

// Chique, não?
