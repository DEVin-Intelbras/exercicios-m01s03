/*
[M1S03] Ex 9 - Projeto: desafio final

Agora que já temos o código praticamente todo implementado, adicione em cada uma das iterações forEach do exercício uma verificação para saber se `openBar` do convidado é `true`. Caso seja true, imprima, junto ao seu nome, um emoji 🍹!

```jsx
// exemplo de implementação:

listaDeObjetos.forEach((objeto) => {
  if (objeto.propriedadeBooleana) {
    elemento.innerHTML +=
      "<li> Deu verdadeiro! 😀</li>";
  } else {
    elemento.innerHTML +=
      "<li> Deu falso... 😪</li>";
  }
});
```

Dica: o Emoji é um caractere de texto. Você pode copiar e colar dentro da sua string como se fosse uma letra! [https://emojipedia.org/](https://emojipedia.org/)
*/

/*
================================== RESOLUÇÃO ==================================================

  Como este é o exercício final, vou colocar aqui apenas a função nova que o exercício pede.

  O código completo do exercício vai estar no script.js

  Vamos usar, mais uma vez, uma função para nos auxiliar na verificação da existencia da propriedade
"openBar" como verdadeiro ou falso dentro do objeto do convidado. Depois, podemos chamar essa função
junto com a função montaNome() na hora de montar as strings.

  Vou chamar a função de "marcarOpenBar" porque nós vamos deixar uma "marca" de um emoji nos
convidados que podem consumir bebida alcoólica.

  Lembrando: um emoji funciona como um caractere, portanto precisa ser trabalhado como string.
*/

const marcarOpenBar = (convidado) => {
  // como a função é bem simples, vamos usar o ternário para retornar o emoji.
  // convidado.openBar é true ? retorna emoji : retorna string vazia;
  return convidado.openBar ? "🍹" : "";
};

// Vá até o arquivo script.js para ver a implementação do sistema completo!
