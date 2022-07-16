/*
[M1S03] Ex 1 - Dobrando números

Utilizando o `forEach`, faça com que todos os valores do array abaixo dobrem de valor:

```js
var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]
```
*/ 

var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]



/*
================================== RESOLUÇÃO ==================================================

  Quando queremos iterar sobre uma lista sem que tenhamos um retorno, o método
recomendado é o forEach, pois ele irá executar uma função de callback em cada elemento.

  Para cada um dos elementos, o motor do JavaScript chama o método callback com os argumentos:
                ( valor, indice, listaCompleta ) => { ... };
  
  Como o exercício pede para que alteremos os valores no array original, precisamos
utilizar o índice para identificar a posição do elemento no array. O valor do elemento
pode ser utilizado para o cáculo matemático do novo valor (valor * 2).

  Utilizo "numero" como nome do parâmetro que irá receber como argumento o valor do
elemento do array porque nós temos um array de números, e cada um dos elementos desse array
é um "numero". Isso facilita a leitura do código e o entendimento do algoritmo.

*/

listaNumeros.forEach((numero, indice)=> {
  listaNumeros[indice] = numero * 2;
})

console.log(listaNumeros)