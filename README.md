# Pesquisa de Produtos

Projeto de pesquisa e exibição de produtos desenvolvido com HTML, CSS e
JavaScript.

A página monta os cartões de produtos dinamicamente a partir do arquivo
`data/produtos.json`. Cada cartão apresenta a imagem, o nome, o preço, a
categoria e o modelo do produto.

## Tecnologias

-   HTML5
-   CSS3
-   JavaScript
-   JSON para armazenar os dados dos produtos

## Estrutura do projeto

``` text
atividade-pesquisa-html/
├── data/
│   └── produtos.json       # Dados dos produtos e caminhos das imagens
├── src/
│   ├── css/
│   │   └── style.css       # Estilos da página
│   └── js/
│       └── script.js       # Carregamento dos dados e pesquisa
├── index.html              # Página principal
└── README.md
```

## Como executar corretamente

**Não abra o `index.html` diretamente com um duplo clique (`file://`).**
O JavaScript carrega os produtos usando `fetch("data/produtos.json")`, e
o navegador pode bloquear essa requisição quando a página é aberta como
arquivo local. Nesse caso, os produtos e cartões não serão carregados.

### Opção recomendada: Visual Studio Code + Live Server

1.  Baixe o projeto ou clone o repositório.
2.  Abra a pasta inteira do projeto no Visual Studio Code.
3.  Instale a extensão **Live Server**, caso ainda não esteja instalada.
4.  Clique com o botão direito no `index.html` e selecione **Open with
    Live Server**.
5.  A página será aberta em um endereço local HTTP. Use esse endereço
    para testar a pesquisa.

É importante iniciar o servidor na pasta raiz do projeto, para que o
caminho `data/produtos.json` seja encontrado.

## Dados e imagens

-   Os dados dos produtos ficam em `data/produtos.json`.
-   O arquivo `src/js/script.js` lê esse JSON e cria os cartões na
    página.
-   O caminho de cada imagem é informado no campo `imagem` de cada
    produto no JSON.

Para que as imagens apareçam, mantenha os arquivos de imagem nos
caminhos indicados no JSON. Se uma imagem não carregar, confira se o
caminho e o nome do arquivo estão corretos, incluindo
maiúsculas/minúsculas e extensão.

## Funcionalidades

-   Pesquisa de produtos por nome, categoria ou modelo.
-   Pesquisa sem diferenciar maiúsculas de minúsculas e com normalização
    de acentos.
-   Exibição dinâmica dos produtos em cartões.
-   Mensagem quando nenhum produto corresponde à pesquisa.
-   Botão para limpar a pesquisa.

## Repositório

https://github.com/henri108100/atividade-pesquisa-html
