document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            const title = card.querySelector(".card-title").innerText;
            const priceText = card.querySelector(".card-price").innerText;
            
            const price = parseFloat(priceText.replace("R$", "").replace(",", "."));
            
            let cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

            cart.items.push(title);
            cart.total += price;

            localStorage.setItem("cart", JSON.stringify(cart));
            
            alert(`${title} adicionado ao carrinho!`);
        });
    });
});