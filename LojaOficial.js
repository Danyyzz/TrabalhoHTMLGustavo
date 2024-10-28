function addCart(nome, preco) {
    event.preventDefault();
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const existe = carrinho.find(item => item.nome === nome) 
    if (existe){
        existe.quantidade += 1
    }
    else{
        carrinho.push({nome: nome, quantidade: 1, preco: preco})
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} foi adicionado ao carrinho!`)

}


 