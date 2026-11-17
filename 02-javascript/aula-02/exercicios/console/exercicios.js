// Exercício 1 — Par ou ímpar (testado com 8 e 11)
console.log("EXERCÍCIO 1 — PAR OU ÍMPAR");

const numeroA = 8;
if (numeroA % 2 === 0) {
  console.log(numeroA, "é par.");
} else {
  console.log(numeroA, "é ímpar.");
}

const numeroB = 11;
if (numeroB % 2 === 0) {
  console.log(numeroB, "é par.");
} else {
  console.log(numeroB, "é ímpar.");
}

// Exercício 2 — Desconto de 10% para compras de R$ 200 ou mais (testado com 199 e 200)
console.log("EXERCÍCIO 2 — DESCONTO");

const compraA = 199;
let totalA;
if (compraA >= 200) {
  totalA = compraA - compraA * 0.10;
} else {
  totalA = compraA;
}
console.log("Compra de R$", compraA.toFixed(2), "→ total R$", totalA.toFixed(2));

const compraB = 200;
let totalB;
if (compraB >= 200) {
  totalB = compraB - compraB * 0.10;
} else {
  totalB = compraB;
}
console.log("Compra de R$", compraB.toFixed(2), "→ total R$", totalB.toFixed(2));

// Exercício 3 — Acesso: 18 anos ou mais E cadastro ativo (todas as combinações)
console.log("EXERCÍCIO 3 — ACESSO");

function verificarAcesso(idade, cadastroAtivo) {
  if (idade >= 18 && cadastroAtivo) {
    console.log("Idade " + idade + ", cadastro ativo: " + cadastroAtivo + " → Acesso liberado.");
  } else {
    console.log("Idade " + idade + ", cadastro ativo: " + cadastroAtivo + " → Acesso negado.");
  }
}

verificarAcesso(20, true);
verificarAcesso(20, false);
verificarAcesso(16, true);
verificarAcesso(16, false);
verificarAcesso(18, true);
