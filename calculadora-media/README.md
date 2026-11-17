# Calculadora de Média — Módulo JavaScript

Projeto de conclusão do Módulo JavaScript da disciplina **Desenvolvimento de Interfaces (ADS)**.

**Acesse:** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/

## O que a aplicação faz
- Recebe o nome do estudante e três notas
- Calcula a média: `(nota1 + nota2 + nota3) / 3`
- Classifica: **Aprovado** (média ≥ 7), **Recuperação** (5 a 6,99) ou **Reprovado** (abaixo de 5)
- Valida nome vazio, notas vazias e notas fora do intervalo de 0 a 10
- Mostra o resultado e as mensagens de erro na própria página

## Arquivos
```
index.html → estrutura (campos, botão e área de resultado)
style.css  → apresentação
script.js  → lógica e interação
TESTES.md  → registro dos testes realizados
```

## Evolução pelas aulas
| Aula | Conteúdo | Onde aparece no `script.js` |
|------|----------|-----------------------------|
| 1 — Variáveis, tipos e operadores | guardar nome e notas, calcular | `const nome`, `Number(texto)`, `(nota1 + nota2 + nota3) / 3` |
| 2 — Condicionais, repetições e funções | média em função e classificação | `calcularMedia()`, `classificar()` com `if / else if / else`, laço `for` nas notas |
| 3 — DOM, eventos e validação | ligar a lógica à página | `document.getElementById`, `addEventListener("click")`, validações e `textContent` |

## Testes
10 casos testados (aprovação, recuperação, reprovação e dados inválidos), sem erros no console. Veja [TESTES.md](TESTES.md).
