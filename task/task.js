let products = [
  {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCWbaNDZ6xC3v4fYEYR9uN3nH5iRQ1BrF4SZjeTBKPChVwCpzLE_10ypI0pibo_maIAmt1tHlPIIwlcHyBwUUgkjG0j-gwvA1sM4jU00GpRluDI_I6Cmaj",name:"Shoe",price:2000,instock:true},
  {img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbWG7urkTZfA0P0lNtaokjNMtvPJzhehoRW8k2OVJMdfFual7rKcVJffmdTE7qzhvYOsqqVUzEZba7TZ8wTOc7NThPryT2kxS19qDaj0wF",name:"Shirt",price:1799,instock:true},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOoBDCN4oOFVv_-4f_D2sXKaL5mhTLwJZhg&s",name:"Bat",price:999,instock:true},
  {img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvQesVXeOydoqOIte5oqqnz-E0WyZe-_yzNl8wE6m4lo0XTUir7Hfc5j9AnSRZkg8PMcOi6FMpD7e3Vndbsvn6TcmPcQ_ssX2V2qyrGPEmsJDXyE9u2-3j3Q",name:"Corgos",price:1999,instock:true},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5fDxTDZ4SEsrYvXQnpLrVu38fm-pg3eRsg&s",name:"Cargo",price:2000,instock:false},
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLdBpG0uT4xiCYskAsjv3ezu-j2CSk531tA&s",name:"iphone",price:78000,instock:true}
];

let cart = [];

function displayProducts(list) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = '';

  list.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "border m-2 w-60 text-center rounded-lg bg-blue-200 p-3";

    const disabled = product.instock ? "" : "disabled";
    const buttonText = product.instock ? "Add to Cart" : "Out of Stock";
    const buttonStyle = product.instock ? "bg-pink-300 hover:bg-pink-400" : "bg-gray-400 cursor-not-allowed";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="h-40 mx-auto">
      <figcaption class="font-semibold mt-2">${product.name}</figcaption>
      <figcaption class="text-gray-700 mb-2">₹${product.price}</figcaption>
      <button class="${buttonStyle} px-3 py-1 rounded" onclick="addToCart(${index})" ${disabled}>${buttonText}</button>
    `;

    productContainer.appendChild(card);
  });
}

displayProducts(products);

function filterProducts() {
  const filterValue = document.getElementById("nameFilter").value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(filterValue)
  );
  displayProducts(filtered);
}

// Add to Cart
function addToCart(index) {
  const product = products[index];
  const existingProduct = cart.find(item => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  displayCart();
}

// Increase quantity
function increaseQuantity(index) {
  cart[index].quantity += 1;
  displayCart();
}

// Decrease quantity
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // remove if quantity becomes 0
  }
  displayCart();
}

// Display Cart
function displayCart() {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "border p-2 w-80 mb-2 bg-gray-100 rounded";
    cartItem.innerHTML = `
      <div class="flex justify-between items-center">
        <span>${item.name}</span>
        <div class="flex items-center space-x-2">
          <button class="bg-gray-300 px-2 rounded" onclick="decreaseQuantity(${index})">−</button>
          <span>${item.quantity}</span>
          <button class="bg-gray-300 px-2 rounded" onclick="increaseQuantity(${index})">+</button>
        </div>
        <span>₹${item.price * item.quantity}</span>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  // Show total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElement = document.createElement("div");
  totalElement.className = "font-bold mt-2";
  totalElement.innerText = "Total: ₹" + total;
  cartContainer.appendChild(totalElement);
}
