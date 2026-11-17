// Aula 2 — funções: cálculo e classificação
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function classificar(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Aula 3 — DOM: elementos da página
const campoNome = document.getElementById("nome");
const camposNotas = [
  document.getElementById("nota1"),
  document.getElementById("nota2"),
  document.getElementById("nota3"),
];
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function mostrarMensagem(texto, classe) {
  resultado.textContent = texto;
  resultado.className = "resultado " + classe;
}

// Aula 3 — evento de clique
botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  // Validação: nome vazio
  if (nome === "") {
    mostrarMensagem("Digite o nome do estudante.", "erro");
    campoNome.focus();
    return;
  }

  // Validação: notas vazias ou fora de 0 a 10
  const notas = [];
  for (let i = 0; i < camposNotas.length; i++) {
    const texto = camposNotas[i].value;
    const nota = Number(texto);

    if (texto === "" || isNaN(nota)) {
      mostrarMensagem("Preencha a nota " + (i + 1) + " com um número.", "erro");
      camposNotas[i].focus();
      return;
    }
    if (nota < 0 || nota > 10) {
      mostrarMensagem("A nota " + (i + 1) + " deve estar entre 0 e 10.", "erro");
      camposNotas[i].focus();
      return;
    }
    notas.push(nota);
  }

  const media = calcularMedia(notas[0], notas[1], notas[2]);
  const situacao = classificar(media);

  let classe = "reprovado";
  if (situacao === "Aprovado") {
    classe = "aprovado";
  } else if (situacao === "Recuperação") {
    classe = "recuperacao";
  }

  mostrarMensagem(nome + ": média " + media.toFixed(2) + " — " + situacao, classe);
});
