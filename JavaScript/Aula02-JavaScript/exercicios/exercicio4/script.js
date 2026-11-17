const campoNome = document.getElementById("nome");
const botao = document.getElementById("saudar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  // Validação: campo vazio (trim() também trata nome só com espaços)
  if (nome === "") {
    resultado.textContent = "Preencha o seu nome.";
    resultado.className = "erro";
    return;
  }

  resultado.textContent = "Olá, " + nome + "!";
  resultado.className = "aprovado";
});
