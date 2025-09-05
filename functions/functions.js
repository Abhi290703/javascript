/*  

functions : in javascript functions can be executed number time where has compared to other methods

function declaretion :

function function name(){
    // block of code
}
    name()  -> function call 

*/

// in functions their are different topics where we all that 
// 1. function parameters 
// 2. function arrgunments
// 3. function with return and without return
// 4. function annoyomus
// 5. function 


// 1. function parameters :

// program :  function add(n,m){
//             sum = a + b  
//             console.log(sum)      
//         }
//             add(6,5)

//     output : 11

// 3. function with return and with return

// program : function add(n,m){
//              return sum = a + b
//         }
//              console.log(sum)

// without return

// program :  function add(n,m){
//                 sum = a + b
//                 console.log(sum)
//             }
//                 add(sum)

// array methods :

// 1. length
// 2. pop
// 3. push
// 4. shift
// 5. unshift
// 6. concate
// 7. join
// 8. split
// 9. slice
// 10. splice


// 1. length
cars = ["volvo","BMW","Jaguar","Benz","Audi","Range_Rover","Rolls_Royes"]

console.log(cars);
// // cars.indexof(5);
// console.log(cars.include('TATA'));


//  2. POP
console.log(cars);
cars .pop()
console.log(cars);

// 3. push
console.log(cars)
cars.push("byd")
console.log(cars)

// 4. shift
console.log(cars)
cars.shift()
console.log(cars)

// 5.unshift
cars.unshift()
console.log(cars)

// 6. concate
let new_cars
let a  = cars.new_casr
console.log(cars)

// 7.join
// console.log(cars)
// console.log(cars.join[' ']);

// 8.slice
// console.log(cars.slice(1,6))

// // 9.splice
// console.log(cars.splice(1,6),"volovo")

/* anonoyus function  

1. In anonoyus function where we will not declare the function name and parameter where we directly 
declare the function by using paranthesis "()"

2. syntax :
                function(){
                    // block of code
                }
                    call function()


example :
            (function() {
            console.log("Anonymous function");
            })
*/

/*  Function Expression

1. function expression means you create a variable and you will assign it to. instead of giving name 
    directly in function(parameter)

2. function expression is also called has anonymous function

syntax :
            let variable function(){
                block of code
            }
            call function ()


example :
            let greet = function(name){
                console.log("hello!")
            }
                function(Abhi)
*/


// program 1 function expression :

    let greet = function(name){
        return "hello" + name ;
    }
   console.log("Abhi")




            

























