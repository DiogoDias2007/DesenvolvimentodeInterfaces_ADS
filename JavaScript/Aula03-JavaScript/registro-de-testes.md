# Registro de testes — Aula 3

Testes executados em 17/11/2026 no Chromium, abrindo `index.html`. Console **sem nenhum erro** durante a execução.

Regras: Aprovado (média ≥ 7) · Recuperação (5 ≤ média < 7) · Reprovado (média < 5). Média exibida com `toFixed(1)`.

## Plano de testes obrigatório

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| 1 | Nome vazio; 8, 7, 9 | Preencha todos os campos. | Preencha todos os campos. | Passou |
| 1b | Ana; 8, (vazio), 9 | Preencha todos os campos. | Preencha todos os campos. | Passou |
| 2 | Ana; 8, abc, 9 (Nota 2 trocada temporariamente para `type="text"`) | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 3 | Ana; -1, 7, 9 | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 3b | Ana; 11, 7, 9 | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 4 | Ana; 5, 5, 5 | Média 5.0; Recuperação | Ana: média 5.0. Situação: Recuperação. | Passou |
| 5 | Ana; 7, 7, 7 | Média 7.0; Aprovado | Ana: média 7.0. Situação: Aprovado. | Passou |
| 6 | Ana; 4, 4, 4 | Média 4.0; Reprovado | Ana: média 4.0. Situação: Reprovado. | Passou |

## Testes complementares

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| 7 | Página recém-aberta | Aguardando dados... | Aguardando dados... | Passou |
| 8 | Mariana; 8, 7, 9 (Passo 13) | Mariana: média 8.0. Situação: Aprovado. | Mariana: média 8.0. Situação: Aprovado. | Passou |
| 9 | Mariana; 5, 6, 6 logo depois, sem recarregar | Resultado muda sem recarregar | Mariana: média 5.7. Situação: Recuperação. | Passou |
| 10 | Nome só com espaços; 8, 7, 9 | Preencha todos os campos. (`trim()`) | Preencha todos os campos. | Passou |
| 11 | Ana; 6.9, 7, 7 (média 6,97) | Recuperação | Ana: média 7.0. Situação: Recuperação. | Passou* |
| 12 | Ana; 4.9, 5, 5 (média 4,97) | Reprovado | Ana: média 5.0. Situação: Reprovado. | Passou* |

\* **Observação:** a classificação está correta, porque usa a média real (6,97 e 4,97). Mas `toFixed(1)` arredonda a média exibida para 7.0 e 5.0, o que pode parecer contraditório para o usuário. Uma melhoria seria exibir duas casas decimais (`toFixed(2)`), que mostraria 6.97 e 4.97.
