const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

// Devolve uma mensagem de erro para o campo, ou "" se a nota for válida
function validarCampo(texto, nomeCampo) {
  // Campo vazio: verificado antes de Number(), porque Number("") resulta em 0
  if (texto === "") {
    return "Erro: o campo " + nomeCampo + " está vazio.";
  }
  const nota = Number(texto);
  // A nota precisa ser um número finito entre 0 e 10
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    return "Erro: a " + nomeCampo + " está fora da faixa (" + texto + "). Use valores de 0 a 10.";
  }
  return "";
}

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  // Verifica cada campo e informa exatamente qual está inválido
  const erro = validarCampo(t1, "Nota 1") || validarCampo(t2, "Nota 2") || validarCampo(t3, "Nota 3");
  if (erro !== "") {
    saida.textContent = erro;
    saida.className = "erro";
    return;
  }

  const media = (Number(t1) + Number(t2) + Number(t3)) / 3;

  let situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Recuperação";
  }

  saida.textContent = "Média " + media.toFixed(2) + " — " + situacao;
  saida.className = situacao === "Aprovado" ? "aprovado" : "recuperacao";
});
