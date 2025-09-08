// program 1

// sum of two digits

function add(a,b){
    return a+b
}
console.log(add(5,6))

//  program 2

// even or odd program

function data(a){
    return a % 2 == 0 ? "even" : "odd" ;
}
console.log(data(8))

// program 3

// max of three program

function maxofthree(a,b,c){
    if (a>=b && a>=c){
        return a
    }
    if (b>=a && b>=c){
        return b
    }
    if (c>=a && c>=b){
        return c
    }
}
console.log(maxofthree(10,20,30))

// program 4

// reverse a string

function reverse(a){
    let rev = " ";
    for (let i =a.length - 1; i >= 0; i--){
        return rev+=a[i]
    }
    return rev
}
console.log(reverse("hello"));

// program 5

// check a string is palindrome or not

function palindrome(str){
    let reverse = str.split("").reverse().join("")
    return str == reverse
}
console.log(palindrome("madam"))

// program 6

function Vowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(Vowels("JavaScript"));  

// program 7

function fact(num){
    let fact = 1
    for (i = 0; i < num.length; i++){
        if (fact(num[i])){
            fact=fact*i
        }
    }
    return fact;
}
console.log(fact(5))

// program 8

function fibonacciSeries(n) {
    let a = 0, b = 1;
    console.log(a); // first number
    console.log(b); // second number

    for (let i = 2; i < n; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
fibonacciSeries(10);

// program 9

function calculator(a,b,operator){
    let result ;

    switch(operator){
        case "add" :
            result : a + b;
            break;
        case "sub" :
            result : a - b;
            break;
        case "mult" :
            result : a * b;
            break;
        case "div" :
            result : a / b;
            break;
        if (b !== 0) {
                result = a / b;
            } else {
                result = "Error: Division by zero!";
            }
            break;
        default:
            result = "Invalid operator!";
    }
    return result;
}
console.log(calculator(10, 5, "add"));       
console.log(calculator(10, 5, "sub"));  
console.log(calculator(10, 5, "mult"));  
console.log(calculator(10, 5, "div"));    


