// Tarefa 1: código original do laboratório
const nome = "Lucas Ferreira";
const email = "lucas@email.com";
let idade = 24;
let usuarioAtivo = true;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);

// Tarefa 2: valores modificados
const nomeModificado = "Diogo Dias";
const emailModificado = "diogo@email.com";
idade = 19;
usuarioAtivo = false;

console.log("DADOS DO USUÁRIO (MODIFICADO)");
console.log("Nome:", nomeModificado);
console.log("E-mail:", emailModificado);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);

// Tarefa 4: idade estimada a partir do ano de nascimento (referência 2026)
const anoNascimento = 2007;
const anoReferencia = 2026;
const idadeEstimada = anoReferencia - anoNascimento;

console.log("Ano de nascimento:", anoNascimento);
console.log("Idade estimada em 2026:", idadeEstimada);
// A idade real pode ser 1 ano menor se o aniversário ainda não ocorreu.
