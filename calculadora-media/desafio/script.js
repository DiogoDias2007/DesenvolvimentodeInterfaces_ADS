const formulario = document.querySelector("#formulario-media");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const campoNota3 = document.querySelector("#nota3");
const campoNota4 = document.querySelector("#nota4"); // Desafio 2
const resultado = document.querySelector("#resultado");
const botaoLimpar = document.querySelector("#limpar");

// Desafio 2: quarta nota no cálculo
function calcularMedia(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}

// Desafio 1: aprovação com média 6
function verificarSituacao(media) {
  if (media >= 6) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

function notaValida(nota) {
  return !Number.isNaN(nota) && nota >= 0 && nota <= 10;
}

function obterClasseSituacao(situacao) {
  if (situacao === "Aprovado") return "aprovado";
  if (situacao === "Recuperação") return "recuperacao";
  return "reprovado";
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const nota1 = Number(campoNota1.value);
  const nota2 = Number(campoNota2.value);
  const nota3 = Number(campoNota3.value);
  const nota4 = Number(campoNota4.value);

  if (nome === "") {
    resultado.textContent = "Informe o nome do estudante.";
    resultado.className = "resultado erro";
    campoNome.focus();
    return;
  }

  if (campoNota1.value === "" ||
      campoNota2.value === "" ||
      campoNota3.value === "" ||
      campoNota4.value === "") {
    resultado.textContent = "Preencha todas as notas.";
    resultado.className = "resultado erro";
    return;
  }

  if (!notaValida(nota1) ||
      !notaValida(nota2) ||
      !notaValida(nota3) ||
      !notaValida(nota4)) {
    resultado.textContent = "As notas devem estar entre 0 e 10.";
    resultado.className = "resultado erro";
    return;
  }

  const media = calcularMedia(nota1, nota2, nota3, nota4);
  const situacao = verificarSituacao(media);
  const classe = obterClasseSituacao(situacao);

  // Desafio 3: maior e menor nota
  const maiorNota = Math.max(nota1, nota2, nota3, nota4);
  const menorNota = Math.min(nota1, nota2, nota3, nota4);

  // Desafio 4: mensagem específica para média 10
  let mensagemExtra = "";
  if (media === 10) {
    mensagemExtra = "<br><strong>Parabéns! Média máxima!</strong>";
  }

  resultado.innerHTML = `
    <strong>Estudante:</strong> ${nome}<br>
    <strong>Média:</strong> ${media.toFixed(1)}<br>
    <strong>Situação:</strong> ${situacao}<br>
    <strong>Maior nota:</strong> ${maiorNota}<br>
    <strong>Menor nota:</strong> ${menorNota}
    ${mensagemExtra}
  `;
  resultado.className = `resultado ${classe}`;
});

botaoLimpar.addEventListener("click", function () {
  resultado.textContent = "O resultado será apresentado aqui.";
  resultado.className = "resultado";
  campoNome.focus();
});
