# Aula 01 — JavaScript: introdução, variáveis e operadores

Desenvolvimento de Interface · ADS · CEUB

| Atividade | Arquivos | Abrir |
|-----------|----------|-------|
| Laboratório 1 — Cadastro simples (console) | `laboratorio1/cadastro.js` | [laboratorio1/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/JavaScript/Aula01-JavaScript/laboratorio1/) + F12 → Console |
| Laboratório 2 — Calculadora de operações | `index.html`, `style.css`, `script.js` | [Aula01-JavaScript/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/JavaScript/Aula01-JavaScript/) |
| Laboratório 3 — Calculadora de média | `laboratorio3/index.html`, `media.js`, `media.css` | [laboratorio3/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/JavaScript/Aula01-JavaScript/laboratorio3/) |
| Exercícios de fixação 1 a 6 (console) | `exercicios/exercicios.js` | [exercicios/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/JavaScript/Aula01-JavaScript/exercicios/) + F12 → Console |
| Evidências | `evidencias/calculadora.png`, `evidencias/media-estudante.png` | — |

```
Aula01-JavaScript/
├── index.html          → Laboratório 2 (calculadora)
├── style.css
├── script.js
├── laboratorio1/       → cadastro de usuário no console
├── laboratorio3/       → calculadora de média (reaproveita ../style.css)
├── exercicios/         → exercícios de fixação no console
└── evidencias/
    ├── calculadora.png
    └── media-estudante.png
```

Testes executados em 17/11/2026 no Chromium. Console **sem nenhum erro** em todas as páginas.

## Laboratório 1 — Cadastro simples de usuário

| Tarefa | Resultado registrado |
|--------|----------------------|
| 1. Executar | DADOS DO USUÁRIO · Nome: Lucas Ferreira · E-mail: lucas@email.com · Idade: 24 · Usuário ativo: true |
| 2. Modificar nome, e-mail, idade e status | Nome: Diogo Dias · E-mail: diogo@email.com · Idade: 19 · Usuário ativo: false |
| 3. Registrar o resultado | Esta tabela. `idade` e `usuarioAtivo` foram declaradas com `let` e puderam receber novos valores; `nome` e `email` são `const`, por isso o nome e o e-mail novos usam variáveis novas. |
| 4. `anoNascimento` e idade estimada (referência 2026) | Ano de nascimento: 2007 · Idade estimada em 2026: 19 (pode ser 18 se o aniversário ainda não ocorreu) |

## Laboratório 2 — Calculadora de operações

| Entrada | Esperado | Obtido | OK? |
|---------|----------|--------|-----|
| 20 e 5 | Soma 25, subtração 15, multiplicação 100, divisão 4 | Soma: 25 · Subtração: 15 · Multiplicação: 100 · Divisão: 4 | ✅ |
| Campo vazio e 5 | Mensagem de preenchimento | Preencha os dois números. | ✅ |
| 10 e 0 | Divisão bloqueada | Divisão: Não é possível dividir por zero. | ✅ |
| 10 e 3 | Divisão decimal | Divisão: 3.3333333333333335 | ✅ |

Evidência: [evidencias/calculadora.png](evidencias/calculadora.png)

## Laboratório 3 — Calculadora de média

Requisitos atendidos: três campos numéricos, botão de cálculo, média na tela, rejeição de campos vazios e notas somente entre 0 e 10.

| Nota 1 | Nota 2 | Nota 3 | Esperado | Obtido | OK? |
|--------|--------|--------|----------|--------|-----|
| 8 | 7 | 9 | Média 8 | Média: 8 | ✅ |
| 10 | 10 | 10 | Média 10 | Média: 10 | ✅ |
| 5 | 5 | 5 | Média 5 | Média: 5 | ✅ |
| 0 | 0 | 0 | Média 0 | Média: 0 | ✅ |
| 12 | 8 | 9 | Mensagem de erro | Erro: as notas devem estar entre 0 e 10. | ✅ |
| 8 | -1 | 9 | Mensagem de erro | Erro: as notas devem estar entre 0 e 10. | ✅ |
| Vazio | 8 | 9 | Mensagem de erro | Erro: preencha as três notas. | ✅ |

Evidência: [evidencias/media-estudante.png](evidencias/media-estudante.png)

## Exercícios de fixação — saída no console

| # | Exercício | Saída |
|---|-----------|-------|
| 1 | Cadastro de estudante | Nome: Diogo Dias · Matrícula: 2026001234 · Curso: Análise e Desenvolvimento de Sistemas · Período: 2 · Situação acadêmica: Matriculado |
| 2 | Compra (R$ 150,00 × 3) | Valor total: R$ 450.00 |
| 3 | Desconto (15% de R$ 200,00) | Desconto: R$ 30.00 · Preço final: R$ 170.00 |
| 4 | Comparação (idade = 18) | `> 18`: false · `< 18`: false · `=== 18`: true · `>= 18`: true |
| 5 | Operadores lógicos (22, cadastro, conta ativa) | Idade mínima E cadastro: true · Conta ativa OU cadastro: true · Conta NÃO ativa: false |
| 6 | Par ou ímpar (7) | 7 é par? false · Resto da divisão por 2: 1 |

## Autoavaliação — Quiz

| # | Pergunta | Resposta |
|---|----------|----------|
| 1 | Tecnologia que controla o comportamento | (C) JavaScript |
| 2 | Declaração que permite reatribuir | (B) let |
| 3 | Tipo de "ADS" | (C) String |
| 4 | 10 % 3 | (B) 1 |
| 5 | Operador que compara valor e tipo | (C) === |
| 6 | Método que localiza elemento por ID | (B) document.getElementById() |
| 7 | Operador lógico E | (C) && |
| 8 | Função que converte texto numérico em número | (B) Number() |

## Checklist de entrega
- [x] Arquivos HTML, CSS e JavaScript organizados
- [x] Laboratório 1: cadastro simples executado
- [x] Laboratório 2: calculadora funcional
- [x] Laboratório 3: calculadora de média validada
- [x] Exercícios de fixação realizados
- [x] Capturas de tela mostrando os testes
