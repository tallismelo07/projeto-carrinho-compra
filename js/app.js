// Valores e nomes dos itens 
const precoENome = {
    nome_produto: "Fone de ouvido",
    preco_produto: 100,
}


const inputProduto = document.getElementById("produto");

function adicionar() {
    switch (inputProduto.value) {
        case "Fone de ouvido - R$100":
            precoENome.nome_produto = "Fone de ouvido";
            precoENome.preco_produto = 100;
            itensConfigurados(precoENome.nome_produto, precoENome.preco_produto);
            calculo(precoENome.preco_produto);
            break;
        case "Celular - R$1400":
            precoENome.nome_produto = "Celular";
            precoENome.preco_produto = 1400;
            itensConfigurados(precoENome.nome_produto, precoENome.preco_produto);
            calculo( precoENome.preco_produto)
            break;
        case "Oculus VR - R$5000":
            precoENome.nome_produto = "Oculus VR";
            precoENome.preco_produto = 5000;
            itensConfigurados(precoENome.nome_produto, precoENome.preco_produto);
            calculo(precoENome.preco_produto)
            break;
    }
}

const quantidade = document.getElementById("quantidade");

function itensConfigurados(nome, preco) {
    const quantidadeValor = quantidade.value;

    const carrinhos_produtos = document.getElementById("lista-produtos");

    const principal = document.createElement("section");
    principal.classList.add("carrinho__produtos__produto")
    

    const quantidadeDeProduto = document.createElement("span");
    quantidadeDeProduto.classList.add("texto-azul");
    quantidadeDeProduto.textContent = `${quantidadeValor}x `;

    const nomeProduto = document.createElement("span");
    nomeProduto.textContent = nome;

    const valorDoProduto = document.createElement("span");
    valorDoProduto.classList.add("texto-azul");
    valorDoProduto.textContent = ` R$${preco}`;

    
    principal.appendChild(quantidadeDeProduto);
    principal.appendChild(nomeProduto);
    principal.appendChild(valorDoProduto);
    carrinhos_produtos.appendChild(principal);

}

let total = 0;

function calculo(preco){
    const quantidadeDeProduto = Number(quantidade.value);
    total += quantidadeDeProduto * preco;
    const valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$${total}`;
}

// function formatacaoValor(valor) {
//     return Number(value).toLocaleString("pt-br", {
//         style: "currency",
//         currency: "BRL",
//   })
// }

const removendoLista = document.getElementById("lista-produtos");
const removendoValor = document.getElementById("valor-total");

function limpar() {
    total = 0; 
    removendoLista.innerHTML = ""; 
    removendoValor.textContent = "R$0"; 
    quantidade.value = "";
}




