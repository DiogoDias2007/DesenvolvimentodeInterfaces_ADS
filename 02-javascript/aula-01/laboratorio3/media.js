const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function () {
  const campo1 = document.getElementById("nota1");
  const campo2 = document.getElementById("nota2");
  const campo3 = document.getElementById("nota3");
  const resultado = document.getElementById("resultado");

  // Rejeita campos vazios
  if (campo1.value === "" || campo2.value === "" || campo3.value === "") {
    resultado.textContent = "Erro: preencha as três notas.";
    resultado.className = "erro";
    return;
  }

  const nota1 = Number(campo1.value);
  const nota2 = Number(campo2.value);
  const nota3 = Number(campo3.value);

  // Aceita somente notas entre 0 e 10
  const notasValidas =
    nota1 >= 0 && nota1 <= 10 &&
    nota2 >= 0 && nota2 <= 10 &&
    nota3 >= 0 && nota3 <= 10;

  if (!notasValidas) {
    resultado.textContent = "Erro: as notas devem estar entre 0 e 10.";
    resultado.className = "erro";
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  resultado.textContent = "Média: " + Number(media.toFixed(2));
  resultado.className = "sucesso";
});
