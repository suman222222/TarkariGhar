let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    const item = {
        name: name,
        price: price
    };

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}