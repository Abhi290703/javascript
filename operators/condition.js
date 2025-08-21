// if-else condition

let a = 200;
if (a >= 100){
    console.log("true");
}
else{
    console.log("false");
}   

// else if condition

let a1 = 200;
if (a1 > 200){
    console.log("you can buy things");
}
else if (a1 >= 900){
    console.log("you can buy more things");
}
else if (a1 <= 200) {
    console.log("you can buy less things");
}
else if (a1 >=1000) {
    console.log("you can buy a lot of things");
}
else {
    console.log("you cannot buy anything");
}

// if-else statement
let num = 0;
if (num>7) {
    if (num%2 == 0){
        console.log("positive even number");
    }
    else{
        console.log("positive odd number");
    }
}    
else{
    if (num%2 == 0){
        console.log("negative even number")
    }
    else{
        console.log("negative odd number")
    }
}

// nested else if condition

let age = 18;
if (age == 18){
    console.log("eligible for driving test");
}
else if (age == 18){
    console.log("first time eligible for driving test");
}
else if (age > 22){
    console.log(" eligible for driving test");
}
else{
    console.log("not eligible for driving test");
}

// switch condition


let operator ="+";
let  b = 5, c = 6 ;
switch  (operator) {

    case "+" :
        console.log(b + c);
        break;
    case "-" :
        console.log(b - c);
        break;
    case "*" :
        console.log(b * c);
        break;
    case "/" :
        console.log(b / c);
        break;
    default:
        console.log("Invalid operator");
}


// switch statement

let item = prompt("enter type of payment")
switch(item)
{
    case "card" :
        console.log("debit card accepted")
        
    case "online payment":
        console.log("online payment accepted")
        
    case "cards":
        console.log("credit cards accepted")
        
    default:
        console.log("no hand cash")
}


