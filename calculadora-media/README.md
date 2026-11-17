# Calculadora de Média — Módulo JavaScript

Projeto de conclusão do Módulo JavaScript da disciplina **Desenvolvimento de Interfaces (ADS)**, seguindo o *Guia de evolução da Calculadora de Média em JavaScript*.

- **Aplicação final (Aula 3):** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/
- **Versões das Aulas 1 e 2 (console):** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/evolucao/
- **Desafio de compreensão:** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/desafio/

## Estrutura
```
calculadora-media/
├── index.html      → estrutura: formulário, botões Calcular e Limpar, área de resultado
├── style.css       → apresentação: cores de aprovado, recuperação, reprovado e erro
├── script.js       → DOM, evento submit, validação, cálculo e classificação
├── TESTES.md       → registro de todos os testes (Aulas 1, 2 e 3)
├── evolucao/       → versões do console
│   ├── aula1-versao1.js       dados definidos no código
│   ├── aula1-versao2.js       dados informados com prompt()
│   ├── aula2-versao3.js       funções e classificação
│   ├── aula2-versao4.js       validação com notaValida()
│   └── extensao-repeticao.js  repetição com while e break
└── desafio/        → os 4 desafios + DESAFIO.md com as respostas
```

## Mapa da evolução
| Aula | Interface | Lógica incorporada | Produto |
|------|-----------|--------------------|---------|
| 1 | Console | Variáveis, operadores, entrada com `prompt()` e `Number()` | Calculadora simples |
| 2 | Console | Funções, `if / else if / else`, validação, `while` | Classificador de resultados |
| 3 | Página web | DOM, evento `submit`, formulário, mensagens na página | Aplicação web completa |

## Fluxo da aplicação final
1. O estudante preenche o nome e as três notas.
2. O evento `submit` chama a função associada ao formulário.
3. `preventDefault()` mantém a página aberta sem recarregar.
4. Os valores são capturados e convertidos com `Number()`.
5. As validações param o processamento quando encontram um problema.
6. `calcularMedia()` e `verificarSituacao()` calculam a média e a situação.
7. O resultado e a classe de cor são inseridos na página.

## Testes
Todos os casos do guia foram executados, além de casos-limite. Nenhum erro no console. Veja [TESTES.md](TESTES.md), incluindo os dois problemas encontrados no código do guia e como foram corrigidos.

## Checklist final
- [x] Os três arquivos estão na mesma pasta
- [x] Os `id` do HTML correspondem aos seletores do JavaScript
- [x] As notas são convertidas para número
- [x] Campos vazios e notas fora do intervalo são tratados
- [x] As funções devolvem os resultados esperados
- [x] O botão Calcular atualiza a página sem recarregá-la
- [x] O botão Limpar restaura a mensagem inicial
- [x] Todos os casos de teste foram executados
