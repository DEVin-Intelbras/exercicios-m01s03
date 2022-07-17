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

const ulArquibancadaEl = document.getElementById("listaArquibancada");
const ulPistaEl = document.getElementById("listaPista");
const ulCamaroteEl = document.getElementById("listaCamarote");

const montaNome = (objPessoa) => {
  return `${objPessoa.nome} ${objPessoa.sobrenome}`;
};

const marcarOpenBar = (convidado) => {
  return convidado.openBar ? "🍹" : "";
};

listaArquibancada.forEach((convidado) => {
  ulArquibancadaEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenBar(convidado)}</li>`; //prettier-ignore
});

listaCamarote.forEach((convidado) => {
  ulCamaroteEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenBar(convidado)}</li>`; //prettier-ignore
});

listaPista.forEach((convidado) => {
  ulPistaEl.innerHTML += `<li>${montaNome(convidado)} ${marcarOpenBar(convidado)}</li>`; // prettier-ignore
});
