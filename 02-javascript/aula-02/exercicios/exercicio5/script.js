const campoTemperatura = document.getElementById("temperatura");
const botao = document.getElementById("classificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const texto = campoTemperatura.value.trim();

  // Validação 1: campo vazio, verificado antes de Number() (Number("") seria 0)
  if (texto === "") {
    resultado.textContent = "Informe a temperatura.";
    resultado.className = "erro";
    return;
  }

  const temperatura = Number(texto);

  // Validação 2: precisa ser um número finito
  if (!Number.isFinite(temperatura)) {
    resultado.textContent = "Temperatura inválida.";
    resultado.className = "erro";
    return;
  }

  let classificacao;
  if (temperatura < 18) {
    classificacao = "Frio";
  } else if (temperatura < 28) {
    classificacao = "Agradável";
  } else {
    classificacao = "Quente";
  }

  resultado.textContent = temperatura + " °C: " + classificacao;
  resultado.className = "";
});
