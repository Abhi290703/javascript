// function greet (name="dear") {
//     a  = "Good Morning " + name
//     console.log(a)
// }
// greet()

// let num =[1,2,3,4,5,6,7]

// let eve = num.filter(x => x%2 )
// console.log(eve);   -> even or odd



// // increment and decrement

// let value = 0;

//     function increment() {
//       value++;
//       document.getElementById("count").innerText = value;
//     }

//     function decrement() {
//       value--;
//       document.getElementById("count").innerText = value;
//     }


// function getTotal(price,qty){
//     return price*qty;
// }

// function showbill(){
//   let q = Number(document.getElementById("price").value)
//   let p = Number(document.getElementById("qlt").value)
//   let total = getTotal(q,p)
//   document.getElementById("bill").innerHTML = "Total bill" + total;

// }
// showbill()

// function total(price,qlt){  // parameters passed
//   return price * qlt;         // here we have done multiplication operation
// }

// function showbill(){            // second function
//   let a = Number(document.getElementById("price").value)    // declared variables to push values in it
//   let b = Number(document.getElementById("qlt").value)    
//   let totalprice = total(a,b)         // taken another variable and insert a,b
//   document.getElementById("bill").innerHTML = "totalbill" + totalprice;
// }



// program 2

function hotelbill() {
      let a = Number(document.getElementById("price").value);
      let b = Number(document.getElementById("qlt").value);

      let totalprice = a * b;  
      document.getElementById("check").innerHTML = "Total Bill: " + totalprice;
    }

// program 3

