/*
[M1S03] Ex 2 - Iterando sobre arrays de objetos

Itere sobre o array abaixo, exibindo para cada um dos objetos o seu nome completo (nome + sobrenome). Você pode exibir em um `console.log`, mas como desafio tente exibir os nomes completos em uma `<ul>` na página HTML!

```jsx
var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];
```
*/

var listaConvidados = [
  { nome: "José", sobrenome: "Carlos" },
  { nome: "Alessandro", sobrenome: "Viana" },
  { nome: "Paula", sobrenome: "Souza" },
  { nome: "Cristian", sobrenome: "Schimit" },
  { nome: "Beatriz", sobrenome: "Viana" },
  { nome: "Fernanda", sobrenome: "Silveira" },
  { nome: "Cláudia", sobrenome: "Torres" },
  { nome: "Augusto", sobrenome: "Cesar" },
  { nome: "Noemi", sobrenome: "Nakamura" },
  { nome: "Pedro", sobrenome: "Lobo" },
];

/*
================================== RESOLUÇÃO ==================================================

Assim como no exercício 1, o método forEach é mais recomendado porque não vamos precisar ter
um retorno desta operação - ela, por si só, já faz uma tarefa específica com um resultado
final.

  Primeiro, vamos resolver a exibição dos nomes. Relembrando a forma como a callback é chamada:
                ( valor, indice, listaCompleta ) => { ... };

  Sendo assim, o primeiro elemento passado como argumento à função callback é o objeto inteiro,
já que o array listaConvidados é um array de objetos. Dentro da callback podemos usar a notação
"valor.propriedade" para acessar a propriedade do objeto que estamos trabalhando.

  Neste exercício, como temos uma "lista de convidados", entendo que cada objeto representa
um convidado. Por isso, o primeiro parâmetro da função de callback vai se chamar "convidado"
*/

listaConvidados.forEach((convidado) => {
  //                     /\/\/\/\/\
  //                     Aqui, só recebi o parâmetro
  //                     "convidado" porque não vou usar
  //                     o segundo argumento (indice) nem
  //                     o terceiro (cópia da lista).
  console.log(convidado.nome + " " + convidado.sobrenome)

  // Experimente também outras formas de concatenar valores!!
  // console.log(convidado.nome, convidado.sobrenome);
  // console.log(`${convidado.nome} ${convidado.sobrenome}`);
})


/*
================================== BONUS!!!! ==================================================
  
  Uma vez que nós iteramos por toda a lista e entendemos como montar o nome + sobrenome, fica
fácil de transferir essa string resultante para um elemento HTML. 

  Para resolver esse desafio, pensamos na seguinte sequencia:
  1) Capturar o elemento HTML usando uma das estratégias vistas em aula (getElementById, querySelector, etc)
  2) Para cada elemento do array, criar um elemento de texto (ou HTML) e inserir a string como conteúdo
  3) Adicionar o elemento criado ao elemento capturado no HTML onde a lista será renderizada
*/

// imaginando uma lista <ul id="lista-convidados"> no arquivo HTML:
const listaDeNomesEl = document.getElementById('lista-convidados'); // Elemento HTML capturado (1)

// FORMA 1
listaConvidados.forEach((convidado) => {
  const itemListaTexto = "<li>" + convidado.nome + " " + convidado.sobrenome + "</li>"; // Cria um elemento com o conteúdo para cada objeto do array (2)
  listaDeNomesEl.innerHTML += itemListaTexto; // Adiciona o item criado ao elemento no HTML (3)
})


// FORMA 2
listaConvidados.forEach((convidado) => {
  const itemListaEl = document.createElement('li')                      //  <- 
  itemListaEl.textContent = convidado.nome + " " + convidado.sobrenome  // Cria um elemento com o conteúdo para cada objeto do array (2)
  listaDeNomesEl.appendChild(itemListaEl) // Adiciona o item criado ao elemento no HTML (3)
})