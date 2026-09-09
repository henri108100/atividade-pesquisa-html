let produtos = [
    ["Notebook", 3500.00, "Tecnologia", "Lenovo IdeaPad 3"],
    ["Celular", 1800.00, "Tecnologia", "Samsung Galaxy A55"],
    ["Tênis", 299.90, "Calçados", "Nike Revolution 7"],
    ["Camiseta", 79.90, "Roupas", "Adidas Essentials"],
    ["Mouse", 120.00, "Tecnologia", "Logitech G203"],
    ["Teclado", 249.90, "Tecnologia", "Redragon Kumara"],
    ["Monitor", 899.90, "Tecnologia", "LG UltraGear 24"],
    ["Fone de Ouvido", 199.90, "Tecnologia", "JBL Tune 520BT"],
    ["Smartwatch", 499.90, "Tecnologia", "Xiaomi Redmi Watch 5"],
    ["Mochila", 159.90, "Acessórios", "Adidas Classic"],
    ["Calça", 129.90, "Roupas", "Nike Sportswear"],
    ["Jaqueta", 249.90, "Roupas", "Puma Essentials"],
    ["Chinelo", 59.90, "Calçados", "Havaianas Top"],
    ["Bota", 349.90, "Calçados", "Timberland Classic"],
    ["Controle", 329.90, "Tecnologia", "Xbox Wireless Controller"],
    ["Webcam", 289.90, "Tecnologia", "Logitech C920"],
    ["Caixa de Som", 219.90, "Tecnologia", "JBL Go 4"],
    ["Boné", 89.90, "Acessórios", "New Era 9Forty"],
    ["Relógio", 399.90, "Acessórios", "Casio G-Shock"],
    ["Óculos", 279.90, "Acessórios", "Ray-Ban Wayfarer"]
];

const container = document.getElementById("container");
const barra_de_pesquisa = document.getElementById("barra-de-pesquisa");

const parametros = new URLSearchParams(window.location.search);
let pesquisa = parametros.get("pesquisa");
if (pesquisa != null && pesquisa != ""){
    barra_de_pesquisa.value = pesquisa;
    pesquisa = pesquisa.toLowerCase();
    produtos = produtos.filter((produto) => {
        return [0, 2, 3].some(i =>
            produto[i].toLowerCase().includes(pesquisa)
        )
    })
}

produtos.forEach((produto) => {
    const cartao = document.createElement("div");
    cartao.setAttribute("class", "cartao-produto");
    cartao.innerHTML = `
        <h3>${produto[0]}</h3>
        <p>Preço: R$ ${produto[1]}</p>
        <p>Categoria: ${produto[2]}</p>
        <p>Modelo: ${produto[3]}</p>
    `;
    container.appendChild(cartao);
}) 