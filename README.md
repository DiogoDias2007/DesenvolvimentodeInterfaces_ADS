# Champions League 2017/18 — A noite de Kiev

Site informativo sobre a temporada 2017/18 da UEFA Champions League, feito apenas com **HTML e CSS**
para a disciplina **Desenvolvimento de Interfaces (ADS)**.

## Conteúdo
- **A final**: Real Madrid 3 × 1 Liverpool, minuto a minuto, ficha técnica e escalações
- **Mata-mata**: todos os confrontos das oitavas à final
- **Protagonistas**: cartões dos principais jogadores da temporada
- **Artilharia**: gráfico de barras feito só com CSS
- **Prêmios** e **recordes** da edição

## Estrutura
```
index.html   → página
style.css    → estilos (layout com CSS Grid, responsivo)
img/         → fotos dos jogadores (veja img/LEIA-ME.md)
```

## Técnicas de CSS usadas
- Variáveis CSS (`:root`) para cores e fontes
- CSS Grid e Flexbox para o layout
- Céu estrelado do topo feito com `radial-gradient`
- Barras da artilharia com `calc()` e variáveis definidas no HTML (`style="--gols: 15"`)
- Menu fixo com `position: sticky` e `backdrop-filter`
- Layout responsivo com `@media` para tablet e celular

## Publicação
O site é publicado pelo GitHub Pages a partir da branch `main`.

Fontes dos dados: UEFA.com e Wikipedia.
