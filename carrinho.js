document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceSpan = document.getElementById("total-price");

    function renderCart() {
        cartItemsDiv.innerHTML = "";
        cart.items.forEach((item, index) => {
            const itemElement = document.createElement("p");
            itemElement.innerHTML = `${item} <span class="delete-item" data-index="${index}" style="cursor:pointer; color:red;">&#10060;</span>`;
            cartItemsDiv.appendChild(itemElement);
        });

        totalPriceSpan.textContent = `R$${cart.total.toFixed(2)}`;
    }

    renderCart();

    // Remove item do carrinho
    cartItemsDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-item")) {
            const index = parseInt(event.target.getAttribute("data-index"), 10);
            const removedPrice = cart.total / cart.items.length;
            
            cart.items.splice(index, 1);
            cart.total -= removedPrice;

            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    });

    // Botão "Pagar" que zera o carrinho
    document.getElementById("pay-button").addEventListener("click", () => {
        localStorage.removeItem("cart");
        cart.items = [];
        cart.total = 0;
        renderCart();
        alert("Compra finalizada! Obrigado.");
    });
});