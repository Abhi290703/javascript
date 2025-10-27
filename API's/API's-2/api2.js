const apiurl = "https://dummyjson.com/products";

fetch(apiurl)
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.getElementById("products");

    productsContainer.innerHTML = data.products
      .map((product) => {
        return `
          <div 
            class="border rounded-xl shadow-md p-4 text-center w-60 cursor-pointer bg-white hover:shadow-lg hover:scale-105 transition"
            onclick="viewProduct(${product.id})"
          >
            <img src="${product.thumbnail}" alt="${product.title}" class="rounded-lg mx-auto mb-3 w-full h-40 object-cover"/>
            <h2 class="font-semibold text-lg">${product.title}</h2>
            <p class="text-gray-700">Price: $${product.price}</p>
            <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Know More
            </button>
          </div>
        `;
      })
      .join("");
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });

// Redirect to details page
function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}


