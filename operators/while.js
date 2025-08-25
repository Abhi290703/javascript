// let a = 40;
// while (a < 30) {
//     console.log(a);
//     a++;
// }

// let b = 456;
// while (b < 30){
//     console.log(b);
//     b--;
// }

// let c = 0;
// while (c<=5){
//     console.log(c);
//     c++;
// }

// let i = 1;
// let row = 5;
// while (i <= row) {
//     let pattern = "";
//     let j = 1;
//     while (j<=i){
//         pattern += "* ";
//         j++;
//     }
//     i++;
//     console.log(pattern);
// }
// console.log("***************");

// let j = 5;
// let row1 = 1;
// while (j >= row1){
//     let pattern1 = " ";
//     let k = 1;
//     while (k <=j){
//         pattern1 += "* ";
//         k++;    
//     }
//     j--;
//     console.log(pattern1);
// }


// 2 time in rigth angle triangle
// let n = 1;
// let row2 = 5;
// while (n <= row2) {
//     let pattern2 = "";
//     let m = 1;
//     while (m <= n) {
//         pattern2 += "* ";
//         m++;
//     }
//     n++;
//     console.log(pattern2);
// }

// console.log("*****************");

//DOM
// let day = document.getElementById("day");
// let month = document.getElementById("month");
// let year = document.getElementById("year");

// let months = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"]
// console.log(months.length);

 // example 2
// let car = document.getElementById("car");
// let company = document.getElementById("company");
// let cost = document.getElementById("cost");

// let cars = ["ZEN", "Ritz" ,"Baleno", "Swift", "i10", "maruti800", "Altroz"]
// let companies = ["Suzuki", "Honda","Hyundai", "Tata",]
// let costs = [500000, 600000, 700000, 800000, 900000, 1000000, 1100000]
// console.log(cars.length);
// console.log(companies.length);
// console.log(costs.length);

// for (let i = 0; i < cars.length; i++) {
//     car.innerHTML += `<option>${cars[i]}</option>`;
// }

// for (let i =0; i<companies.length; i++){
//     companies.innerHTML += `<option>${companies[i]}</option>`;
// }

// for (let i =0; i<costs.length; i++){
//     cost.innerHTML += `<option>${costs[i]}</option>`;
// }

// let stockitems = 10
// let purchased = 5
// while(stockitems <= purchased){
//     stockitems -= purchased;
//     console.log(`Items left in stock are: ${stockitems}`);
//     console.log(`Items purchased are: ${purchased}`);
// }
// console.log(`available items ${stockitems} and purchased items ${purchased} try to remove ${stockitems - purchased}`)\

let a = 0;
while (a<=10){
    console.log(a);
    a++;
}


// let count = 1;
// let pin = 1234;

// do{
//     console.log("Welcome to ICICI bank");
//     if(pin == 1234){
//         console.log("transaction succes");
//     }
//     else if(count == 3)
//     else{
//         console.log("ENter valid pin");
//     }

//     count++;

// }while(count<=3);

// if(count == 3){
//     console.log("last attempt");
// }
// else if(count>3){
// console.log("your card is blocked");
// }


// transcation

// let count = 3;
// let pin = 1234;

// do{
//     console.log("Welcome to ICICI bank");
//     if(pin == 1234){
//         console.log("transaction succes");
//     }
//     else if(count == 3){}
//     else{
//         console.log("ENter valid pin");
//     }
//     count++;


// }while(count<=3);

// if(count == 3){
//     console.log("last attempt");
// }
// else if(count>3){
// console.log("your card is blocked");
// }


let count = 4;
let pin = 2346;
do{
    console.log("Welcome to ICICI bank");
    if (pin == 2345){
        console.log("transcation success")
    }
    else if(count == 3){}
    else{
        console.log("Enter valid pin");
    }
    count ++
}
while(count<=3){
    if(count == 3){
        console.log("over limited")
    }
    else{
        console.log("your card is blocked");
    }
}