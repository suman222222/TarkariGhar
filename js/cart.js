let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

    const loggedIn =
    localStorage.getItem("loggedIn");

    if(!loggedIn){

        alert(
            "Please login before adding products to cart."
        );

        window.location.href =
        "login.html";

        return;
    }

    const item = {
        name:name,
        price:price
    };

    cart.push(item);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");

}