# Aula 03 — Calculadora de Média: DOM, eventos, validação e integração

Desenvolvimento de Interface · ADS · CEUB

**Abrir:** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/02-javascript/aula-03/

```
aula-03/
├── index.html              → estrutura: campos, rótulos, botão e área de resultado
├── estilo.css              → apresentação
├── script.js               → seleção no DOM, evento de clique, validação, funções e saída
├── registro-de-testes.md   → plano de testes executado (12 casos)
└── README.md               → respostas dos exercícios e reflexão
```

Testes: veja [registro-de-testes.md](registro-de-testes.md).

## Exercícios

### Exercício 1 — Localização no DOM
| Comando no console | Resultado |
|---|---|
| `document.querySelector('#titulo')` | `<h1 id="titulo">Calculadora de Média</h1>` |
| `document.querySelector('#resultado')` | `<p id="resultado" aria-live="polite">…</p>` |
| `document.querySelector('#resultado').textContent = 'Teste do DOM'` | A página passou a mostrar **Teste do DOM** |

**Explicação:** `document.querySelector('#resultado')` **selecionou** o elemento (o `#` indica um ID). A atribuição a `.textContent` **alterou** a página, sem modificar o arquivo HTML.

### Exercício 2 — Evento de clique
Foi criado temporariamente `<button id="teste">`, selecionado com `document.querySelector('#teste')` e associado a:
```js
botaoTeste.addEventListener('click', () => console.log('Clique detectado!'));
```
Dois cliques → o console mostrou **Clique detectado!** duas vezes. Depois o botão foi removido, como pede o exercício; por isso ele não aparece no `index.html`.

### Exercício 3 — Conversão de tipos
| Comando | Resultado |
|---|---|
| `typeof '8'` | `"string"` |
| `typeof Number('8')` | `"number"` |
| `'8' + '7'` | `"87"` |
| `Number('8') + Number('7')` | `15` |

**Por que converter:** `.value` sempre devolve texto, mesmo em `type="number"`. Com texto, o `+` **concatena** ("8" + "7" = "87") em vez de somar. Sem `Number()`, a soma das notas 8, 7 e 9 viraria "879", e a média sairia errada.

### Exercício 4 — Validação
| Teste | Mensagem | `if` responsável |
|---|---|---|
| Nota 11 | Use notas entre 0 e 10. | `if (invalida)`, porque `some()` encontrou `nota > 10` |
| Nota -1 | Use notas entre 0 e 10. | `if (invalida)`, porque `some()` encontrou `nota < 0` |
| Nome vazio | Preencha todos os campos. | `if (!estudante \|\| nota1.value === '' \|\| …)`, porque `!estudante` é verdadeiro |

### Exercício 5 — Limites da classificação
| Teste | Resultado |
|---|---|
| Média exatamente 5 (5, 5, 5) | Ana: média 5.0. Situação: Recuperação. |
| Média exatamente 7 (7, 7, 7) | Ana: média 7.0. Situação: Aprovado. |
| Média inferior a 5 (4, 4, 4) | Ana: média 4.0. Situação: Reprovado. |

**Por que a ordem importa:** cada `if` com `return` encerra a função assim que encontra uma condição verdadeira. Se `media >= 5` viesse primeiro, uma média 8 já retornaria "Recuperação" e nunca chegaria ao teste `media >= 7`. Por isso a maior faixa é verificada primeiro, depois a intermediária, e o que sobra é "Reprovado".

### Exercício 6 — Melhoria da experiência
1. **Instrução visível:** `<p class="instrucao">Digite notas entre 0 e 10.</p>` abaixo do título, em negrito.
2. **Cor do botão:** de roxo para azul `#005a9c`. O texto branco tem contraste de **7,1:1** (o mínimo recomendado é 4,5:1). No hover fica `#003f6e`, com contraste de 10,9:1.
3. **Tab:** a ordem de navegação é Nome → Nota 1 → Nota 2 → Nota 3 → Calcular média, e cada item mostra o contorno rosa de foco.
4. **Legibilidade do resultado:** texto `#25202b` sobre `#f5eff9`, com contraste de 14,1:1. Continua legível.

## Reflexão — entrada, decisão e saída (`script.js`)

| Papel | Linha | Explicação |
|---|---|---|
| Entrada | `const n1 = Number(nota1.value);` | Lê o que o usuário digitou no campo e converte o texto em número. |
| Decisão | `if (media >= 7) return 'Aprovado';` | Compara a média com o limite e decide a situação do estudante. |
| Saída | ``resultado.textContent = `${estudante}: média ${media.toFixed(1)}. ` + …`` | Mostra a mensagem final na própria página, sem recarregar. |

## Checklist de entrega
- [x] Os quatro arquivos estão na mesma pasta
- [x] Os campos têm rótulos e IDs corretos
- [x] O botão aciona o JavaScript
- [x] Campos vazios e notas inválidas são rejeitados
- [x] Média e situação são calculadas corretamente
- [x] O resultado aparece na própria página
- [x] Pelo menos cinco testes estão documentados (12)
- [x] O console não apresenta erros na execução normal
