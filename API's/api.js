/*
fetch syntax
fetch().then().then().catch()

explanation of syntax :
fetch() : it is used to make a request to the server by providing the URL of the resource
.then() : it is used to handle the response from the server
.catch() : it is used to handle the error if any occurs during the request
 */

// const apiurl = "https://dummyjson.com/products";
// fetch(apiurl)
// .then((response)=> response.json())
// .then((data)=>{
//     console.log(data.products);
//     const productcontainer = document.getElementById("products");
//     productcontainer.innerHTML = data.products.map((product)=>{
//         return(
//         `<div class="product-card">
//             <h2>${product.title}</h2>
//             <img src="${product.images[0]}" alt="${product.title}" width="200"/>
//             <p>Price: $${product.price}</p>
//         </div>`
//         )
//     }).join("")
//     .catch((error)=>{
//         console.log("Error occurred while fetching data:", error);
//     })
// })

const apiurl = "https://dummyjson.com/products";

// Fetch and display all products
fetch(apiurl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.products);

    const productsContainer = document.getElementById("products");

    // Display products
    productsContainer.innerHTML = data.products
      .map((product) => {
        return `
          <div class="product-card rounded-xl shadow-md hover:translate-y-0 transition-transform duration-300 text-center" onclick='showDetails(${JSON.stringify(product)})'>
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <img src="${product.thumbnail}" alt="${product.title}" width="200"/>
          </div>
        `;
      })
      .join("");

    // Log each product in console
    data.products.forEach((product) => {
      console.log(`Product: ${product.title}, Price: $${product.price}`);
    });
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });

// Async fetch on button click
const fetchproducts = async () => {
  const response = await fetch(apiurl);
  const data = await response.json();
  console.log(data.products);
};

document.getElementById("btn").addEventListener("click", fetchproducts);

