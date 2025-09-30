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

/* their are some types of mouse events

1.click
2.dbclick
3.mouseover : it is useful when we hover any box and something else
4.mouseout : it is also same has the above
5.mouseup : it refers if we press it shows the how many times press
6.mousedown : it refers same but functionlly is different reverse of mouseup
7.mousemouse  : it refers how many times we move the mouse it shows the how many times it moves


*/


function sayhello(){
    alert("alert")
}

// mouse events

document.getElementById("btn").addEventListener("click",() => {
    console.log("btn click")
})

document.getElementById("dblclick").addEventListener("dblclick",() => {
    console.log("db click")
})

document.getElementById("hover").addEventListener("mouseover",() => {
    document.getElementById("hover").style.background = ("blue")
})

document.getElementById("hover").addEventListener("mouseout",() => {
    document.getElementById("hover").style.background = ("pink")
})
document.getElementById("hover").addEventListener("mousemove",() => {
    console.log("mouse is moving inside")
})

document.getElementById("press").addEventListener("mousedown",() =>{
    console.log("mouse press and hold")
})

document.getElementById("press1").addEventListener("mouseup",() => {
console.log("mouse up")
})

// declaring by using variable

