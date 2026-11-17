const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();

  // Validação 1: campo vazio. Verificado antes de Number(), porque Number("") resulta em 0.
  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return; // encerra o evento após entrada inválida
  }

  const idade = Number(texto);

  // Validação 2: a idade precisa ser inteira (Number.isInteger impede 18.5) e estar entre 0 e 120.
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    // Desafio extra: quantos anos faltam para completar 18
    const faltam = 18 - idade;
    if (faltam === 1) {
      resultado.textContent = "Menor de idade. Falta 1 ano para completar 18.";
    } else {
      resultado.textContent = "Menor de idade. Faltam " + faltam + " anos para completar 18.";
    }
  }
});
