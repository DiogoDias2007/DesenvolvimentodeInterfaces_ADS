while (true) {
  const nome = prompt(
    'Informe o nome ou digite "fim":'
  );

  if (nome === null || nome.trim().toLowerCase() === "fim") {
    console.log("Programa encerrado.");
    break;
  }

  // Captura, validação, cálculo e saída
  // podem ser executados aqui para cada estudante.
}
