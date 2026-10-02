const main = document.querySelector("main");
const grid_cartoes =  document.querySelector(".grid-cartoes");
const barra_de_pesquisa = document.querySelector("#barra-de-pesquisa");
const botao_limpar_pesquisa = document.querySelector("#botao-limpar-pesquisa");

let produtos;

function formatar_texto(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

async function carregarProdutos() {
    const resposta = await fetch("data/produtos.json");
    produtos = await resposta.json();

    const parametros = new URLSearchParams(window.location.search);
    let pesquisa = parametros.get("pesquisa");

    if (pesquisa != null) {
        pesquisa = pesquisa.trim(); //tirar espaços em branco do começo e do fim da pesquisa
        if (pesquisa != "") {
            barra_de_pesquisa.value = pesquisa;
            pesquisa = formatar_texto(pesquisa);
            produtos = produtos.filter((produto) => {
                return [produto.nome, produto.categoria, produto.modelo].some(valor =>
                    formatar_texto(valor).includes(pesquisa)
                );
            })

            if (produtos.length == 0) {
                main.innerHTML = "<p class='mensagem-sem-resultados'>Nenhum produto foi encontrado :-(</p>";
            }
        } 
    }

    produtos.forEach((produto) => {
        const cartao = document.createElement("div");
        cartao.setAttribute("class", "cartao-produto");
        cartao.innerHTML = `
            <img class="imagem-produto" src="${produto.imagem}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Modelo: ${produto.modelo}</p>
        `;
        grid_cartoes.appendChild(cartao);
    })
}

botao_limpar_pesquisa.addEventListener("click", (event) => {
    event.preventDefault();
    barra_de_pesquisa.value = "";
    window.location.href = window.location.pathname
})

carregarProdutos();