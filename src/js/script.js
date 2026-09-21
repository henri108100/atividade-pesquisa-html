const container = document.getElementById("container");
const barra_de_pesquisa = document.getElementById("barra-de-pesquisa");

let produtos;
async function carregarProdutos() {
    const resposta = await fetch("data/produtos.json");
    produtos = await resposta.json();

    const parametros = new URLSearchParams(window.location.search);
    let pesquisa = parametros.get("pesquisa");
    if (pesquisa != null && pesquisa != "") {
        barra_de_pesquisa.value = pesquisa;
        pesquisa = pesquisa.toLowerCase();
        produtos = produtos.filter((produto) => {
            return [produto.nome, produto.categoria, produto.modelo].some(valor =>
                valor.toLowerCase().includes(pesquisa)
            );
        })
    }

    produtos.forEach((produto) => {
        const cartao = document.createElement("div");
        cartao.setAttribute("class", "cartao-produto");
        cartao.innerHTML = `
            <h3>${produto.nome}</h3>
            <img class="imagem-produto" src="${produto.imagem}">
            <br>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Modelo: ${produto.modelo}</p>
        `;
        container.appendChild(cartao);
    }) 
}
carregarProdutos();

