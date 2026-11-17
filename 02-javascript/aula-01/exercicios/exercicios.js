// 1. Cadastro de estudante
const nomeEstudante = "Diogo Dias";
const matricula = "2026001234";
const curso = "Análise e Desenvolvimento de Sistemas";
const periodo = 2;
const situacaoAcademica = "Matriculado";

console.log("1. CADASTRO DE ESTUDANTE");
console.log("Nome:", nomeEstudante);
console.log("Matrícula:", matricula);
console.log("Curso:", curso);
console.log("Período:", periodo);
console.log("Situação acadêmica:", situacaoAcademica);

// 2. Compra
const preco = 150.00;
const quantidade = 3;
const valorTotal = preco * quantidade;

console.log("2. COMPRA");
console.log("Preço: R$", preco.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Valor total: R$", valorTotal.toFixed(2));

// 3. Desconto
const precoProduto = 200.00;
const percentualDesconto = 15;
const valorDesconto = precoProduto * percentualDesconto / 100;
const precoFinal = precoProduto - valorDesconto;

console.log("3. DESCONTO");
console.log("Desconto: R$", valorDesconto.toFixed(2));
console.log("Preço final: R$", precoFinal.toFixed(2));

// 4. Comparação
const idade = 18;

console.log("4. COMPARAÇÃO (idade = " + idade + ")");
console.log("idade > 18:", idade > 18);
console.log("idade < 18:", idade < 18);
console.log("idade === 18:", idade === 18);
console.log("idade >= 18:", idade >= 18);

// 5. Operadores lógicos
const idadeUsuario = 22;
const possuiCadastro = true;
const contaAtiva = true;

console.log("5. OPERADORES LÓGICOS");
console.log("Idade mínima E cadastro:", idadeUsuario >= 18 && possuiCadastro);
console.log("Conta ativa OU cadastro:", contaAtiva || possuiCadastro);
console.log("Conta NÃO ativa:", !contaAtiva);

// 6. Par ou ímpar
const numero = 7;
const ehPar = numero % 2 === 0;

console.log("6. PAR OU ÍMPAR");
console.log(numero, "é par?", ehPar);
console.log("Resto da divisão por 2:", numero % 2);
