// Assuming you have DOM elements for your cart and items
const cart = document.getElementById("cart");
const items = document.querySelectorAll(".menu-item");

// Event listener for adding items to the cart
items.forEach((item) => {
  item.addEventListener("click", () => {
    addToCart(item);
  });
});

// Function to add items to the cart
function addToCart(item) {
  const itemName = item.querySelector(".item-name").textContent;
  const itemPrice = item.querySelector(".item-price").textContent;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
        <span>${itemName}</span>
        <span>${itemPrice}</span>
    `;

  cart.appendChild(cartItem);
}
