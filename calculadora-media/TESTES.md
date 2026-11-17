# Registro de testes — Calculadora de Média

Critério: média ≥ 7 → Aprovado · média ≥ 5 → Recuperação · abaixo de 5 → Reprovado.
Média = (nota1 + nota2 + nota3) / 3, exibida com uma casa decimal (`toFixed(1)`).

Testes executados em 17/11/2026 no Chromium. Console (F12 → Console) **sem nenhum erro** em todas as páginas.

## Aula 1 — Cálculo no console (`evolucao/aula1-versao1.js` e `aula1-versao2.js`)

| Entrada | Média | Esperado | Obtido no console | OK? |
|---------|-------|----------|-------------------|-----|
| Versão 1 (dados no código): Mariana; 8, 7 e 9 | 8,0 | Nome, as três notas e média 8.0 | Estudante: Mariana / Nota 1: 8 / Nota 2: 7 / Nota 3: 9 / Média: 8.0 | ✅ |
| Mariana; 8, 7 e 9 | 8,0 | Nome e média 8.0 | Estudante: Mariana / Média: 8.0 | ✅ |
| Bia; 5, 6 e 7 | 6,0 | Nome e média 6.0 | Estudante: Bia / Média: 6.0 | ✅ |
| Caio; 10, 10 e 9 | 9,7 | Média com uma casa decimal | Estudante: Caio / Média: 9.7 | ✅ |

## Aula 2 — Funções, validação e classificação (`evolucao/aula2-versao3.js`, `aula2-versao4.js`)

| Entrada | Média | Esperado | Obtido no console | OK? |
|---------|-------|----------|-------------------|-----|
| Versão 3: Mariana; 8, 7 e 9 | 8,0 | Aprovado | Média: 8.0 / Situação: Aprovado | ✅ |
| Versão 4: Mariana; 8, 7 e 9 | 8,0 | Aprovado | Média: 8.0 / Situação: Aprovado | ✅ |
| Versão 4: Carlos; 5, 6 e 6 | 5,7 | Recuperação | Média: 5.7 / Situação: Recuperação | ✅ |
| Versão 4: Ana; 3, 4 e 2 | 3,0 | Reprovado | Média: 3.0 / Situação: Reprovado | ✅ |
| Versão 4: João; 8, 12 e 7 | — | Mensagem de nota inválida | As notas devem estar entre 0 e 10. | ✅ |
| Versão 4: nome vazio; 8, 7 e 9 | — | Pedir o nome | Informe o nome do estudante. | ✅ |
| Extensão (while): Ana 8, 7, 9 → Rui 3, 4, 2 → "fim" | 8,0 e 3,0 | Dois estudantes e encerrar | Ana 8.0 Aprovado / Rui 3.0 Reprovado / Programa encerrado. | ✅ |

## Aula 3 — Aplicação web (`index.html`, `style.css`, `script.js`)

| Entrada | Média | Esperado | Obtido na página | OK? |
|---------|-------|----------|------------------|-----|
| Mariana; 8, 7 e 9 | 8,0 | Aprovado e mensagem verde | Estudante: Mariana · Média: 8.0 · Situação: Aprovado (verde) | ✅ |
| Carlos; 5, 6 e 6 | 5,7 | Recuperação e mensagem amarela | Estudante: Carlos · Média: 5.7 · Situação: Recuperação (amarelo) | ✅ |
| Ana; 3, 4 e 2 | 3,0 | Reprovado e mensagem vermelha | Estudante: Ana · Média: 3.0 · Situação: Reprovado (vermelho) | ✅ |
| Nome vazio; 8, 7 e 9 | — | Solicitar o nome | Informe o nome do estudante. (vermelho) | ✅ |
| João; 8, 12 e 7 | — | Informar intervalo de 0 a 10 | As notas devem estar entre 0 e 10. (vermelho) | ✅ |
| João; 8, (vazio) e 7 | — | Pedir todas as notas | Preencha todas as notas. (vermelho) | ✅ |
| João; −1, 5 e 5 | — | Informar intervalo de 0 a 10 | As notas devem estar entre 0 e 10. (vermelho) | ✅ |
| Hugo; 7, 7 e 7 (limite) | 7,0 | Aprovado | Média: 7.0 · Aprovado | ✅ |
| Ian; 5, 5 e 5 (limite) | 5,0 | Recuperação | Média: 5.0 · Recuperação | ✅ |
| Botão **Limpar** | — | Limpar campos e restaurar a mensagem inicial | Campos vazios e "O resultado será apresentado aqui." | ✅ |
| Botão **Calcular** | — | Atualizar sem recarregar a página | Mesma URL, sem recarregamento (`preventDefault`) | ✅ |

## Problemas encontrados e corrigidos durante os testes

1. **`notaValida()` dentro de `verificarSituacao()`** — no código do guia, a função foi declarada dentro de outra função, depois do `return`. Fora dela, `notaValida` não existe e o envio do formulário gerava `ReferenceError` no console. Corrigido movendo a função para fora.
2. **Nota 12 não mostrava a mensagem na página** — os atributos `min="0" max="10"` fazem o navegador bloquear o envio com um balão próprio, e o JavaScript nunca rodava. Foi acrescentado `novalidate` ao `<form>`, para que a validação seja feita pelo JavaScript e a mensagem apareça na própria página (como o guia pede: "type number … não substitui a validação em JavaScript").

## Desafio de compreensão

Testes e respostas em [desafio/DESAFIO.md](desafio/DESAFIO.md).
