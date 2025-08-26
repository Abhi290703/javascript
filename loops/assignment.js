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

product = ["laptop" , "bag" , "belt" , "shoe"]
stock = [10, 5, 0, 8]
let j = 0;
while(j < product.length){
    if(stock[j] <= 0){
        console.log(product[j] + " is out of stock");
    }
    
console.log(`${product[j]} is in stock with quantity: ${stock[j]}`)
j++;
}

// 11. Add to Cart Simulation
