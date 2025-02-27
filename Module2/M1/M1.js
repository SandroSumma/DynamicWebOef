document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const productNameInput = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const addToCartButton = document.getElementById("addToCart");
    const cartItemsList = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("total");
    const sortByPriceButton = document.getElementById("sortByPrice");

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((product, index) => {
            total += product.price;
            const li = document.createElement("li");
            li.textContent = `${product.name} - €${product.price.toFixed(2)}`;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Verwijder";
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCart();
            });
            
            li.appendChild(removeButton);
            cartItemsList.appendChild(li);
        });

        totalDisplay.textContent = total.toFixed(2);
    }

    addToCartButton.addEventListener("click", () => {
        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        
        if (name === "" || isNaN(price) || price <= 0) {
            alert("Voer een geldige productnaam en prijs in.");
            return;
        }
        
        cart.push({ name, price });
        productNameInput.value = "";
        productPriceInput.value = "";
        updateCart();
    });

    sortByPriceButton.addEventListener("click", () => {
        cart.sort((a, b) => a.price - b.price);
        updateCart();
    });
});
