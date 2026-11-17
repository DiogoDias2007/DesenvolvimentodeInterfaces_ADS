// Aula 2 — Versão 3: lógica organizada em funções
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const nomeEstudante = prompt(
  "Informe o nome do estudante:"
);
const nota1 = Number(prompt("Informe a primeira nota:"));
const nota2 = Number(prompt("Informe a segunda nota:"));
const nota3 = Number(prompt("Informe a terceira nota:"));

const media = calcularMedia(nota1, nota2, nota3);
const situacao = verificarSituacao(media);

console.log("Estudante:", nomeEstudante);
console.log("Média:", media.toFixed(1));
console.log("Situação:", situacao);
