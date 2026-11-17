const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  // TODO 1: campo vazio. Verificado antes de Number(), porque Number("") resulta em 0.
  if (t1 === "" || t2 === "" || t3 === "") {
    saida.textContent = "Erro: campo vazio. Preencha as três notas.";
    saida.className = "erro";
    return;
  }

  // TODO 2: converte os textos para números
  const n1 = Number(t1);
  const n2 = Number(t2);
  const n3 = Number(t3);

  // TODO 3: cada nota precisa ser um número finito entre 0 e 10
  if (!Number.isFinite(n1) || n1 < 0 || n1 > 10 ||
      !Number.isFinite(n2) || n2 < 0 || n2 > 10 ||
      !Number.isFinite(n3) || n3 < 0 || n3 > 10) {
    saida.textContent = "Erro: nota fora da faixa. Use valores de 0 a 10.";
    saida.className = "erro";
    return;
  }

  // TODO 4: média aritmética
  const media = (n1 + n2 + n3) / 3;

  // TODO 5: situação (regra deste exercício: média 6 ou mais = Aprovado)
  let situacao;
  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Recuperação";
  }

  // TODO 6: média com duas casas decimais e situação
  saida.textContent = "Média " + media.toFixed(2) + " — " + situacao;
  saida.className = situacao === "Aprovado" ? "aprovado" : "recuperacao";
});
