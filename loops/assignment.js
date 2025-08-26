// // 6. Countdown display

// let a = 10;
// while(a>=1){
//     console.log(a);
//     a--;
// }

// // 7. find item until match
// products = ["laptop" , "mobile" , "camera" , "tab"]
// let i = 0;
// while(i<products.length){
//     if(products[i] == "camera"){
//         console.log("item found");
//     }
//     i++;
// }

// // 8. Calculate Cart Total
// let cart =[499 , 299 , 1299 , 999]
// let j = 0;
// while (j<cart.length){
//     j+=cart[j];
//     j++;
// }
// console.log(j);

// 9 . Show Stock-Based Product List

// product = ["laptop" , "bag" , "belt" , "shoe"]
// stock = [10, 5, 0, 8]
// let j = 0;
// while(j < product.length){
//     if(stock[j] <= 0){
//         console.log(product[j] + " is out of stock");
//     }
    
// console.log(`${product[j]} is in stock with quantity: ${stock[j]}`)
// j++;
// }

// 12. Show Cart Status At Least Once
// let cart1 = []
// do{
//     if(cart1.length == 0){
//         console.log("Cart is empty");
//     }
// }while(cart1.length > 0);

 // 13. Flash Sale Display
 // Display product prices after applying 20% discount using do...while.
//  let product = ["laptop", "shoe", "bag", "tv"];
//  let prices = [100, 200, 300, 400, 2000];
//  let  i = 0;
//  do{
//     if(prices[i] > 0){
//         let discountprice = prices[i] - (prices[i] * 0.2);
//         console.log(`the price of ${product[i]} is ${discountprice}`);
//     }
//     i++;
    
// }while(i < product.length);

// 14. Wishlist Items
// Use do...while to loop through a wishlist array and display items using innerHTML.
// let whishlist = ["laptop", "shoe", "bag", "tv"];
// let j = 0;
// do {
//     document.body.innerHTML += `<div>${whishlist[j]}</div>`;
//     j++;
// } while (j < whishlist.length);

// 15.  15. Add Product Until Stock Zero
// Simulate a product being added until stock reduces to 0. Show how many times it was added
let stock = 10;
let addcount = 0;
do{
    stock --;
    addcount ++;
}while(stock > 0);
console.log(`product added ${addcount} times`)

// 16. Category-wise Product Display (Nested Loop)
// Use nested for loops. Outer array: categories. Inner array: products in that category.
let categories = ["Electronics", "Clothing", "Books"];
let innerArray = [["laptop", "mobile", "tv"],["shirt", "jeans"],["novel", "magazine"]];
for (let i=0 ; i<categories.length; i++){
    console.log(categories[i]);
    for (let k=0; k<innerArray[i].length; k++){
        console.log(" "+innerArray[i][k])
    }
    }

// 19. Show Products by Type
// Group products as "Clothing", "Electronics", "Accessories" and show them in divs. (Use condition in loop.)
// let products = [
//     { name: "laptop", type: "Electronics" },

