function attCarrinho(){
    const cartLista = document.getElementById('cart')
    const totalItens = document.getElementById('total-price')
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    cartLista.innerHTML = ''
    let total = 0

    cart.forEach((item, index) => { 
        total += item.quantidade * item.preco;
        totalUnitario = item.quantidade * item.preco;
        cartLista.innerHTML += `
        <li>
            <div class="item-info">${item.quantidade}x ${item.nome} </div>
                <div class="actions">
                    <div id="totalUnitario">R$ ${totalUnitario.toFixed(2)}</div>
                    <button id="botaoRemover" onclick="deleteItem(${index})">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
        </li>
        `
    });
    totalItens.innerHTML = `R$ ${total.toFixed(2)}`

}
function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];
    cart.splice(index, 1)
    localStorage.setItem('carrinho', JSON.stringify(cart));
    attCarrinho();
}


function finalizarCompra() {
    localStorage.removeItem('carrinho')
    attCarrinho();
    alert(`Compra finalizada! Obrigada pela preferencia!`)

}

window.onload = attCarrinho;