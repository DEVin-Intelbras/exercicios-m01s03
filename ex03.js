/*
[M1S03] Ex 3 - Criar uma calculadora

Para resolver este exercício, você precisará criar um script **JavaScrip** e vinculá-lo em uma página HTML (pode ser em branco).

Crie um programa que pergunte ao usuário o valor do numero1, valor do numero2 e operação (+, -, ou / ). A partir dos dados recebidos, exiba em um `console.log` com o resultado da operação escolhida entre os dois números digitados.

Utilize `prompt` para perguntar os números e a operação, e utilize uma estrutura de controle de fluxo condicional para realizar a operação ( `if` ou `switch case` ).
*/

/*
================================== RESOLUÇÃO ==================================================

  De forma simples, podemos resolver este exercícios perguntando ao usuário três vezes:
  1) Qual o primeiro número
  2) Qual o segundo número
  3) Qual operação matemática

  Então, utilizaremos uma estrutura condicional para realizar o cálculo. Podemos utilizar
tanto uma cadeia de ifs como um switch case.
*/

const num1 = prompt("Digite o primeiro número:");
const num2 = prompt("Digite o segundo número:");
const operacao = prompt("Digite a operação [+ - * /]:");

// RESOLUÇÃO 1
if (operacao === "+") {
  alert(num1 + num2);
} else if (operacao === "-") {
  alert(num1 - num2);
} else if (operacao === "*") {
  alert(num1 * num2);
} else if (operacao === "/") {
  alert(num1 / num2);
} else {
  // o else é executado caso a operação não
  // entre em nenhuma das situações acima.
  alert("Não sei realizar essa operação :(");
}

// RESOLUÇÃO 2

switch (operacao) {
  // JavaScript, leia a operação e veja qual
  // é o valor...

  case "+": // CASO seja +, faça...
    alert(num1 + num2);
    break; // e páre.

  case "-": // CASO seja -, faça...
    alert(num1 - num2);
    break; // e páre.

  case "*": // CASO seja *, faça...
    alert(num1 * num2);
    break; // e páre.

  case "/": // CASO seja /, faça...
    alert(num1 / num2);
    break; // e páre.

  // se não for nenhum caso acima...
  default:
    // o default é executado caso a operação não
    // entre em nenhuma das situações acima.
    alert("Não sei realizar essa operação :(");
    break;
}
