# Calculadora de Média — Módulo JavaScript

Projeto de conclusão do Módulo JavaScript da disciplina **Desenvolvimento de Interfaces (ADS)**, seguindo o *Guia de evolução da Calculadora de Média em JavaScript*.

- **Aplicação final (Aula 3):** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/
- **Versões das Aulas 1 e 2 (console — abra e pressione F12):**
  - Aula 1, Versão 1: https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/aula1/versao1/
  - Aula 1, Versão 2: https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/aula1/versao2/
  - Aula 2, Versão 3: https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/aula2/versao3/
  - Aula 2, Versão 4: https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/aula2/versao4/
  - Extensão com repetição: https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/aula2/extensao/
- **Desafio de compreensão:** https://diogodias2007.github.io/DesenvolvimentodeInterfaces_ADS/calculadora-media/desafio/

## Estrutura
Cada pasta de versão tem um `index.html` simples que carrega o arquivo `.js` com o nome usado no guia.

```
calculadora-media/
├── index.html      → estrutura: formulário, botões Calcular e Limpar, área de resultado
├── style.css       → apresentação: cores de aprovado, recuperação, reprovado e erro
├── script.js       → DOM, evento submit, validação, cálculo e classificação
├── TESTES.md       → registro de todos os testes (Aulas 1, 2 e 3)
├── aula1/
│   ├── versao1/aula1-media.js   dados definidos no código
│   └── versao2/aula1-media.js   dados informados com prompt()
├── aula2/
│   ├── versao3/aula2-media.js   funções e classificação
│   ├── versao4/aula2-media.js   validação com notaValida()
│   └── extensao/extensao-repeticao.js   repetição com while e break
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
