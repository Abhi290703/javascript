// else

let age = 20;
if(age > 18){
    console.log("you are eligible for driving license");
}
else{
    console.log("you are not eligible for driving license");
}

// program 2

let distances = 20;
if(distances < 20){
    console.log("you can take uber");
}
else{
    console.log("you can take cab");
}

// program 3

let temperature = 25;
if(temperature < 20){
    console.log("it is cold outside");
}
else{
    console.log("it is hot outside");
}

// program 4
let cartvalue = 400;
console.log(typeof cartvalue);
if(cartvalue <= 500){
    console.log("you are eligible for discount");
}
else{
    console.log("you are not eligible for discount");
}

// else-if

let cartvalue1 = 600;
if(cartvalue1 == 500){
    console.log("0% discount");
}
else if(cartvalue1 > 500 && cartvalue1 <= 600){
    console.log("your discount value is 10%")
}
else if(cartvalue1 > 600 && cartvalue1 <= 800){
    console.log("your discount value is 20%")
}
else if(cartvalue1 > 800 && cartvalue1 <= 1000){
    console.log("your discount value is 30%")
}
else{
    console.log("you are not eligible for discount");
}

// switch cases

let day = "fri";
switch(day){
    case "mon":
        console.log("today is monday");
        break;
        case "tue":
            console.log("today is tuesday");
            break;
        case "wed":
            console.log("today is wednesday");
            break;
        case "thu":
            console.log("today is thursday");
            break;
        case "fri":
            console.log("today is friday");
            break; 
        case "sat":
            console.log("today is saturday");
            break;
        default:
            console.log("today is sunday");
}

