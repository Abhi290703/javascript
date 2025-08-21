// Program 1

// let marks = 80;
// let age = 18;
// if (marks > 90) {
//     console.log("Grade A");
//     if(age == 18){
//         console.log("Eligible for scholarship");
//     }
// }
// else if (marks > 70 && marks < 89) {
//     console.log("Grade B");
//     if(age < 21){
//         console.log("Try again next year");
//     }
// }
// else{
//     console.log("fail")
// }


// Program 2
// let login = "tablet";
// if (login === "mobile") {
//     console.log("mobile dashboard");
// } else {
//     console.log("desktop dashboard");
// } else {
//     console.log("Please Login");
// }

//Program 3
// var a = 500;
// var b = "coupon";
// if (a == 500){
//     console.log("20% discount applied");
// }
// else if (b === "coupon") {
//     if(b === "coupon"){
//         console.log("10% discount applied");
//     }
//     else{
//         console.log("5% discount applied");
//     }
// }
// else {
//     console.log("No discount applied");
// }



// program 4
// let temp = 40;
// if (temp > 35){
//     console.log("Extreme Heat Warning");
   
// }
// else if (temp > 25 && temp < 30) {
//     console.log("Normal");
// }
// else{
//     console.log("Cool Weather");
// }

// program 5
// let passangertype = "student";
// let destination = "metro";

// if (destination == "metro") {
//     if (passangertype == "senior"){
//         console.log("40 percent discount off")
//     }
// else {
//     console.log("Full fare")
//     }
// }
// else {
    
//     if (passangertype == "student"){
//     console.log("50 percent discount off")
//     } 
// }
// else {
//     console.log("Full fare")
// }
    

//program 5
// let currency = prompt("enter type of currency USD/EUR/IND");
// let amount = parseFloat(prompt("Enter the amount:")); 
// amount = 1000;
// switch(currency) {
//     case "USD":
//         if (amount > 1000) {
//             console.log("converted with bonus:" + (amount*83+500));
//         }
//         else {
//             console.log("Standard conversion: " + (amount * 83) + " INR"); 
//         }
//         break;
//     case "EUR":
//         if (amount > 1000) {
//             console.log("converted with bonus:" + (amount*90+700));
//         }
//         else{
//             console.log("Standard conversion: " + (amount * 90) + " INR");
//         }
//         break;
//     case "IND":
//         if (amount > 1000){
//             console.log("converted with bonus:" + (amount/83+700));
//         }
//         else {
//             console.log("Standard conversion: " + (maount / 83) + "INR")
//         }
//         break;
//     default:
//         console.log("not currency");
// }

//program 6
// let role = "watch man";
// let department;
// switch(role) {
//     case "admin":
//         if(department == "role"){
//             console.log("Edit Access Granted")
//         }
//         else{
//             console.log("view only Access")
//         }
//         break;
//     case "manager":
//         if(department == "role"){
//             console.log("Edit Access Granted")
//         }
//         else{
//             console.log("view only Access")
//         }
//         break;
//     case "employee":
//         if(department == "role"){
//             console.log("Edit Access Granted")
//         }
//         else{
//             console.log("view only Access")
//         }  
//         break;
//     default:
//         console.log("only Access")
// }

// program 7

// let weather = "cloudy";
// let temp;
// switch(weather) {
//     case "sunny":
//         if (temp == "weather"){
//             console.log("stay inside")
//         }
//         else{
//             console.log("Wear Protection")
//         }
//         break;
//     case "rainy":
//         if(temp == "weather"){
//             console.log("stay inside")
//         }
//         else{
//             console.log("Wear Protection")
//         }
//     case "snow":
//         if(temp == "weather"){
//             console.log("stay inside")
//         }
//         else{
//             console.log("Wear Protection")
//         }
//         break;
// default:
//     console.log("you can go out")
//     }


// program 8

let plan = "basic";
let user='student';
switch(plan) {
    case "standard":
        if (user == "student"){
            console.log("Extra discount for student")
        }
         else {
            console.log("standard price applied")
        }
        break;
    case "basic":
        if (user == "student"){
            console.log("Extra discount for student")
        }
        else {
            console.log("basic price applied")
        }
        break;
    case "premium":
        if (user == "student"){
            console.log("Extra discount for student")
        }
        else {
            console.log("premium price applied")
        }
        break;
    default:
        console.log("All plans are same")
}



