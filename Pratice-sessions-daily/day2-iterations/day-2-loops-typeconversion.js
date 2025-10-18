// type conversions :

// 1. Implicit conversion

// converting number to string 

// let a = "5"+5;
// console.log(typeof(a));

// let c = 6 + true;
// console.log(c)

let day = document.getElementById("day");
let month = document.getElementById("month");    
let year = document.getElementById("year");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

for (let i = 1; i <= 31; i++){
    day.innerHTML += `<option>${i}</option>`;
}

for (let i = 0; i < months.length; i++){
    month.innerHTML += `<option>${months[i]}</option>`;
}

for (let i = 1990; i <= 2100; i++){
    year.innerHTML += `<option>${i}</option>`;
}


// program 2

// let count = 0;
// for (let i = 0; i<=100; i++){
//     console.log("count:",i);
// }

// program 3

// let sum = 0;
// for (let i=0; i<=10; i++){
//     sum+=i;
// }
// console.log("sum:",sum);

// program 4

// even numbers

// method 1
for (let i=0; i<=15; i++){
    if(i%2==0){
        console.log(i);
    }
}

// method 2

for(let i=0; i<=15; i+=2){
    console.log(i);
}

// looping of array

// let fruits = ["apple", "banana", "grapes", "mango", "orange"];
// for (let i=0; i<fruits.length; i++){
//     console.log(fruits)[i];  
// }

// for with condition

// for(let i=0; i<=20; i++){
//     if(i%3===0 && i%5===0){
//         console.log("fizzbuzz");
//     }
// }

// nested for loop

for(let i = 1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

