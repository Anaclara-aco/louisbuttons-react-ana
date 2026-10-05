# Luis Buittons | Landing Page em React

Parte 2 (individual) do trabalho da disciplina Desenvolvimento Frontend II (Universidade Veiga de Almeida).

## Autor

Ana Clara da Conceição de Oliveira

## Origem

- Repositorio do grupo (Parte 1): https://github.com/Regina-Beatriz-dev/Luis-Buittons
- Pagina que fiz na Parte 1: feminino.html (Moda Feminina)
- Autor do index.html original: Davi
- Copias das paginas originais para comparacao: pasta `referencia-html/`

## Site publicado

https://louisbuttonsanaclara.netlify.app

## Tecnologias

- React com Vite
- Bootstrap 5.3 (mesmo framework de CSS usado pelo grupo)
- Font Awesome 6.5 e Google Fonts (Inter e Playfair Display)

## Como executar

```
npm install
npm run dev
```

Para gerar a versao de producao: `npm run build` e `npm run preview`.

## Secoes da Landing Page

| Secao | Origem |
|---|---|
| Menu (Navbar) | index.html + feminino.html (fundidos em um so, com ancoras) |
| Hero | index.html |
| Beneficios | index.html |
| Destaques | index.html (produtos masculinos) |
| Moda Feminina (filtros, ordenacao e produtos) | feminino.html (minha pagina) |
| Chamada final | nova, repete a acao principal do Hero |
| Rodape | novo, aparece uma so vez no fim da pagina |

## Decisoes de fusao

- Um unico menu fixo, com ancoras para as secoes. Links para paginas que nao fazem parte da Landing foram removidos.
- Um unico H1 (titulo do Hero). Os demais titulos sao H2 e H3.
- Os produtos femininos que apareciam nos destaques do index ja estao na secao Moda Feminina, com o selo "Destaque", para nao repetir fotos.
- Filtro por categoria, ordenacao por preco e contador do carrinho usam `useState`.
- Produtos, beneficios e categorias vem de arrays percorridos com `map()` (`src/data/dados.js`).
- A identidade visual do grupo foi mantida: os arquivos CSS originais estao em `src/styles/`.
