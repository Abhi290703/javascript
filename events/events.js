/* 

what is event?
event is an action occurance recogenized by the browser that can be handled by java script.

eg. to do some action by using particular thing is called event

in events their are some types

1.inline event : 
        inline event is nothing but we will code inside the tag is called inline event
    Advantages :
    1.it is simply to write and easy to understand
    2.in simple projects it is sutiable

2.event property :
        their are some event properties where we use to perform some action on it
    Advantages :
    1.js is sperated from html
    2.cleaner code than inline

    dis - advantage :
    1.can attach only ine handler  - > where it takes last occurance value rather than previous ones

3. add event listner :
        where we use add event in it.
    Advantages :
    1. can attach multiple handlers
    2. js is sperated for html
    3. cleaner code than inline


*/


// programs 

// by using onclick event

// function sayhello() {
    // alert("hello! welcome ")
// }


// by using double click function

// document.getElementById("btn").onclick = function () {
//     console.log("hello event property")
// }

/* 

if we see here we have given same id for both the function if seen here first i have given "hello event
property" after that "double click function" where has if seen output the output will be double click
function it says latest once

*/

// document.getElementById("btn").onclick = function () {
//     console.log("double click function")
// }



// mouse and click operation

/* their are 6 types of mouse events

1. click
2. dblclick (double click)
3. mouseover
4. mouseout
5. mousemove 
6. mouseup
7. mousedown

*/


function sayhello(){
    alert("all")
}

// document.getElementById("btn").addEventListener("btn",() => {
//     console.log("btn click")
// })

// document.getElementById("dblclick").addEventListener("dblclick",() => {
//     console.log("db click")
// })

// document.getElementById("hover").addEventListener("hover",() => {
//     document
// })

// document.getElementById("btn").onclick = function(){
//     alert("welcome")
// }

// document.getElementById("btn").onclick = function(){
//     alert("say")
// }

// declaring by using variable

