/*
Crie uma função chamada `liberarBebidas` que receba uma lista de objetos de convidados e, para cada objeto dentro da lista, verifique se a **idade** do convidado é maior que **17 anos**. Caso seja maior, adicione uma propriedade “openBar” com o valor `true` ao objeto deste convidado. Caso seja menor, adicione a **mesma propriedade**, mas com o valor `false`.

Esta função deve criar um novo array vazio e, para cada iteração, adiciona a propriedade e adiciona o objeto modificado ao array vazio. Exemplo:

Chame a função recém criada passando o array de lista de convidados e salve o array retornado em uma variável `convidadosComBebidasProcessada`. O objeto deste array deve conter agora a propriedade `openBar` com o valor de acordo com a idade que você adicionou ao objeto inicial do exercício 4!

```jsx

function modificarUmArrayDeObjetos(oArray) {
	var arrayResultante = [];	
	for (var i = 0; i < oArray.length; i++) {
		// aqui dentro rola o algoritmo de comparação, adição de propriedades, etc...
		var objetoDoArray = oArray[i];
		objetoDoArray.novaPropriedade = "valor da propriedade";
		arrayResultante.push(objetoDoArray)
		// fim do algoritmo
	}
	return arrayResultante; // vai retornar uma cópia do array com os objetos modificados
}

modificarUmArrayDeObjetos(umArrayDeObjetosQualquer) // aqui, a função é chamada
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
/*
================================== RESOLUÇÃO ==================================================
  
  O exercício completo pede para que eu itere sobre todos os objetos do array lista listaDeConvidados
e verifique a idade de cada um dos convidados, para que possa liberar o open bar ou não.

  Num primeiro momento, eu pensaria em usar um forEach para adicionar as propriedades nos objetos
originais, modificando cada um deles dentro do array. Porém, o exercício também pede para que
o resultado desta função seja um novo array. Portanto, o melhor método é utilizar um .map.

  O array resultante pode ser retornado normalmente para fora da função.

  Para verificarmos a idade de cada um dos convidados, precisamos utilizar uma estrutura condicional
na iteração. Portanto, para cada convidado, SE idade >= 18, adiciona a propriedade com o valor true.
Caso contrario, adiciona a propriedade com o valor false.

   DICA! Como, de qualquer maneira, a propriedade será adicionada, podemos, por padrão, já incluir
com um valor qualquer (eu escolhi false) e, em seguida verificar a condição e, caso seja necessário,
alterar para o valor correto.
*/

// pode ser utilizado arrow function
function liberarBebidas(lista) {
  const resultado = lista.map((convidado) => {
    // cadastra a propriedade com valor padrão
    convidado.openBar = false;
    // verifica a igualdade
    if (convidado.idade >= 18) {
      // se entrou aqui, é pq a idade é maior ou igual a 18
      convidado.openBar = true;
    }

    // aqui dentro do map precisamos retornar o convidado modificado
    // para que ele faça parte do novo array gerado pelo método .map
    return convidado;
  });

  // A variável resultado contem um array com os elementos modificados
  // Com esse return, eu "empurro" o resultado para fora da função
  return resultado;
}

// e aqui eu executo a função, capturando o resultado em
// uma variável convidadosComBebidasProcessada

//                                          Passo o array de convidados para a função
const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);
