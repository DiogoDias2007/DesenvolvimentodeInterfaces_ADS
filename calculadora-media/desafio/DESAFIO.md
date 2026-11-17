# Desafio de compreensão — respostas

Os desafios foram feitos numa cópia separada (`desafio/`) para que a versão do guia continue igual ao material da aula.
O CSS foi reaproveitado da versão principal (`../style.css`), por isso nenhum CSS precisou mudar.

| # | Desafio | Arquivos alterados | O que mudou |
|---|---------|--------------------|-------------|
| 1 | Critério de aprovação com média 6 | `script.js` | Em `verificarSituacao()`, a condição passou de `media >= 7` para `media >= 6`. Só a lógica muda; HTML e CSS não. |
| 2 | Quarta nota | `index.html` e `script.js` | HTML: novo `label` e `input` com `id="nota4"`. JS: seleção de `#nota4`, conversão com `Number()`, parâmetro a mais em `calcularMedia()`, divisão por 4 e validação de campo vazio e intervalo da nova nota. |
| 3 | Maior e menor nota | `script.js` | `Math.max()` e `Math.min()` com as quatro notas, exibidos no resultado. |
| 4 | Mensagem para média 10 | `script.js` | `if (media === 10)` acrescenta "Parabéns! Média máxima!" ao resultado. |
| 5 | Explicar os arquivos alterados | — | Esta tabela. O CSS não precisou de alteração em nenhum desafio, porque as classes `aprovado`, `recuperacao`, `reprovado` e `erro` já existiam. |

## Testes do desafio

| Entrada | Média | Esperado | Obtido | OK? |
|---------|-------|----------|--------|-----|
| Lia; 6, 6, 6, 6 | 6,0 | Aprovado (critério novo), maior 6, menor 6 | Aprovado · maior 6 · menor 6 | ✅ |
| Rui; 5, 6, 4, 7 | 5,5 | Recuperação, maior 7, menor 4 | Recuperação · maior 7 · menor 4 | ✅ |
| Max; 10, 10, 10, 10 | 10,0 | Aprovado + "Parabéns! Média máxima!" | Aprovado + mensagem | ✅ |
| Teo; 8, 8, 8, (vazio) | — | "Preencha todas as notas." | "Preencha todas as notas." | ✅ |
| Bia; 8, 8, 8, 11 | — | "As notas devem estar entre 0 e 10." | "As notas devem estar entre 0 e 10." | ✅ |
