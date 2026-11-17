# Registro de testes — Calculadora de Média

Critério: média ≥ 7 → Aprovado · 5 ≤ média < 7 → Recuperação · média < 5 → Reprovado.
Média = (nota1 + nota2 + nota3) / 3.

| # | Nome | Nota 1 | Nota 2 | Nota 3 | Esperado | Resultado na página | OK? |
|---|------|--------|--------|--------|----------|---------------------|-----|
| 1 | Ana   | 8  | 7 | 9   | Aprovado (8,00)    | Ana: média 8.00 — Aprovado        | ✅ |
| 2 | Bruno | 6  | 5 | 5.5 | Recuperação (5,50) | Bruno: média 5.50 — Recuperação   | ✅ |
| 3 | Carla | 3  | 4 | 2   | Reprovado (3,00)   | Carla: média 3.00 — Reprovado     | ✅ |
| 4 | (vazio) | 8 | 8 | 8  | Erro: nome vazio   | Digite o nome do estudante.       | ✅ |
| 5 | Davi  | (vazio) | 8 | 8 | Erro: nota vazia | Preencha a nota 1 com um número.  | ✅ |
| 6 | Eva   | 11 | 8 | 8   | Erro: fora de 0–10 | A nota 1 deve estar entre 0 e 10. | ✅ |
| 7 | Fabio | -1 | 8 | 8   | Erro: fora de 0–10 | A nota 1 deve estar entre 0 e 10. | ✅ |
| 8 | Gil   | 7  | 7 | 6.9 | Recuperação (6,97) | Gil: média 6.97 — Recuperação     | ✅ |
| 9 | Hugo  | 7  | 7 | 7   | Aprovado (limite)  | Hugo: média 7.00 — Aprovado       | ✅ |
| 10 | Ian  | 5  | 5 | 5   | Recuperação (limite) | Ian: média 5.00 — Recuperação   | ✅ |

Console do navegador (F12 → Console): nenhum erro durante os testes.
