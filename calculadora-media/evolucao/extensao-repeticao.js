// Aula 2 — Extensão opcional com repetição
// Reaproveita as funções da Versão 4 para processar vários estudantes.
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

function notaValida(nota) {
  return !Number.isNaN(nota) && nota >= 0 && nota <= 10;
}

while (true) {
  const nome = prompt(
    'Informe o nome ou digite "fim":'
  );

  if (nome === null || nome.trim().toLowerCase() === "fim") {
    console.log("Programa encerrado.");
    break;
  }

  // Captura, validação, cálculo e saída para cada estudante
  const nota1 = Number(prompt("Informe a primeira nota:"));
  const nota2 = Number(prompt("Informe a segunda nota:"));
  const nota3 = Number(prompt("Informe a terceira nota:"));

  if (nome.trim() === "") {
    console.log("Informe o nome do estudante.");
  } else if (!notaValida(nota1) || !notaValida(nota2) || !notaValida(nota3)) {
    console.log("As notas devem estar entre 0 e 10.");
  } else {
    const media = calcularMedia(nota1, nota2, nota3);
    console.log("Estudante:", nome, "| Média:", media.toFixed(1), "|", verificarSituacao(media));
  }
}
