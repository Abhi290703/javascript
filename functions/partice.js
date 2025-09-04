// function greet (name="dear") {
//     a  = "Good Morning " + name
//     console.log(a)
// }
// greet()



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


function getTotal(price,qty){
    return price*qty;
}

function showbill(){
  let q = Number(document.getElementById("price").value)
  let p = Number(document.getElementById("quality").value)
  let total = getTotal(q,p)
  document.getElementById("bill").innerText = `<h1>Total bill : ${total} </h1>`;

}

