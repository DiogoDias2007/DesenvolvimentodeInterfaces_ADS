# Aula 02 — JavaScript: DOM, eventos, conversão, condicionais e validação

Desenvolvimento de Interface · ADS · CEUB

| Atividade | Arquivos | Abrir |
|-----------|----------|-------|
| Laboratório 1 — Verificador de idade (+ desafio extra) | `index.html`, `script.js` | [aula-02/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/) |
| Laboratório 2 — Calculadora de média e situação (+ CSS opcional) | `laboratorio-media/` | [laboratorio-media/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/laboratorio-media/) |
| Exercícios 1, 2 e 3 (console) | `exercicios/console/exercicios.js` | [console/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/exercicios/console/) + F12 → Console |
| Exercício 4 — Saudação no DOM | `exercicios/exercicio4/` | [exercicio4/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/exercicios/exercicio4/) |
| Exercício 5 — Temperatura | `exercicios/exercicio5/` | [exercicio5/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/exercicios/exercicio5/) |
| Exercício 6 — Validação por campo | `exercicios/exercicio6/` | [exercicio6/](https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-02/exercicios/exercicio6/) |
| Capturas de tela dos testes | `evidencias/` (18 imagens) | — |

```
aula-02/
├── index.html, script.js      → Laboratório 1
├── laboratorio-media/         → Laboratório 2 (index.html, script.js, style.css)
├── exercicios/
│   ├── console/               → Exercícios 1, 2 e 3
│   ├── exercicio4/            → Saudação no DOM
│   ├── exercicio5/            → Classificação de temperatura
│   └── exercicio6/            → Média informando o campo inválido
└── evidencias/                → capturas de tela
```

Os comentários nos arquivos `.js` explicam cada validação. Testes executados em 17/11/2026 no Chromium; console **sem nenhum erro** em todas as páginas.

## Laboratório 1 — Verificador de idade

| Entrada | Saída esperada | Obtido | Evidência | OK? |
|---------|----------------|--------|-----------|-----|
| 17 | Menor de idade. | Menor de idade. Falta 1 ano para completar 18. | [lab1-idade-17](evidencias/lab1-idade-17.png) | ✅ |
| 18 | Maior de idade. | Maior de idade. | [lab1-idade-18](evidencias/lab1-idade-18.png) | ✅ |
| 0 | Menor de idade. | Menor de idade. Faltam 18 anos para completar 18. | — | ✅ |
| -2 | Idade inválida. | Idade inválida. | [lab1-idade-negativa](evidencias/lab1-idade-negativa.png) | ✅ |
| 18.5 | Idade inválida. | Idade inválida. | [lab1-idade-fracionaria](evidencias/lab1-idade-fracionaria.png) | ✅ |
| campo vazio | Informe a idade. | Informe a idade. | [lab1-idade-vazio](evidencias/lab1-idade-vazio.png) | ✅ |
| 121 | Idade inválida. | Idade inválida. | — | ✅ |

**Desafio extra:** quando a idade é menor que 18, aparece "Faltam X anos para completar 18" (no singular quando falta 1 ano).

## Laboratório 2 — Calculadora de média e situação

Regra do exercício: média ≥ 6 → Aprovado; senão → Recuperação. Média com `toFixed(2)`.

| Notas | Resultado esperado | Obtido | Evidência | OK? |
|-------|--------------------|--------|-----------|-----|
| 8, 7, 9 | Média 8.00 — Aprovado | Média 8.00 — Aprovado | [lab2-aprovado](evidencias/lab2-aprovado.png) | ✅ |
| 6, 6, 6 | Média 6.00 — Aprovado | Média 6.00 — Aprovado | [lab2-limite-6](evidencias/lab2-limite-6.png) | ✅ |
| 5, 5, 5 | Média 5.00 — Recuperação | Média 5.00 — Recuperação | [lab2-recuperacao](evidencias/lab2-recuperacao.png) | ✅ |
| 0, 0, 0 | Média 0.00 — Recuperação | Média 0.00 — Recuperação | — | ✅ |
| 6, 6, 5.97 (limite) | Média 5.99 — Recuperação | Média 5.99 — Recuperação | [lab2-limite-5-99](evidencias/lab2-limite-5-99.png) | ✅ |
| 12, 8, 9 | Erro: nota fora da faixa | Erro: nota fora da faixa. Use valores de 0 a 10. | [lab2-erro-faixa](evidencias/lab2-erro-faixa.png) | ✅ |
| 8, vazio, 9 | Erro: campo vazio | Erro: campo vazio. Preencha as três notas. | [lab2-erro-vazio](evidencias/lab2-erro-vazio.png) | ✅ |

**Passo 6 (CSS opcional):** `laboratorio-media/style.css` organiza os campos, aumenta contraste, espaçamento e fonte e mostra o foco do teclado. A situação continua escrita no texto; a cor da borda é só um reforço.

## Exercícios de fixação — respostas

### Exercício 1 — Par ou ímpar
`numero % 2 === 0` → par; senão → ímpar.
- 8 → **8 é par.**
- 11 → **11 é ímpar.**

### Exercício 2 — Desconto (10% a partir de R$ 200)
- R$ 199,00 → **total R$ 199,00** (sem desconto)
- R$ 200,00 → **total R$ 180,00** (desconto de R$ 20,00)

### Exercício 3 — Acesso (`idade >= 18 && cadastroAtivo`)
| Idade | Cadastro ativo | Resultado |
|-------|----------------|-----------|
| 20 | true | Acesso liberado. |
| 20 | false | Acesso negado. |
| 16 | true | Acesso negado. |
| 16 | false | Acesso negado. |
| 18 | true | Acesso liberado. |

### Exercício 4 — Saudação no DOM
| Entrada | Saída | Evidência |
|---------|-------|-----------|
| vazio | Preencha o seu nome. | [ex4-vazio](evidencias/ex4-vazio.png) |
| só espaços | Preencha o seu nome. | — |
| Diogo | Olá, Diogo! | [ex4-nome](evidencias/ex4-nome.png) |

### Exercício 5 — Classificação de temperatura
| Temperatura | Saída | Evidência |
|-------------|-------|-----------|
| 10 | Frio | [ex5-frio](evidencias/ex5-frio.png) |
| 17.9 | Frio | — |
| 18 | Agradável | — |
| 25 | Agradável | [ex5-agradavel](evidencias/ex5-agradavel.png) |
| 27.9 | Agradável | — |
| 28 | Quente | — |
| 35 | Quente | [ex5-quente](evidencias/ex5-quente.png) |
| -5 | Frio | — |
| vazio | Informe a temperatura. | — |

### Exercício 6 — Desafio de validação
A calculadora do Laboratório 2 foi modificada (cópia em `exercicios/exercicio6/`) com a função `validarCampo()`, que verifica cada nota separadamente e informa qual campo está errado:

| Notas | Saída | Evidência |
|-------|-------|-----------|
| 12, 8, 9 | Erro: a Nota 1 está fora da faixa (12). Use valores de 0 a 10. | [ex6-erro-faixa](evidencias/ex6-erro-faixa.png) |
| 8, vazio, 9 | Erro: o campo Nota 2 está vazio. | [ex6-erro-vazio](evidencias/ex6-erro-vazio.png) |
| 8, 7, -1 | Erro: a Nota 3 está fora da faixa (-1). Use valores de 0 a 10. | — |
| 8, 7, 9 | Média 8.00 — Aprovado | — |
