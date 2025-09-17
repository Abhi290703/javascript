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

function sayhello() {
    // alert("hello! welcome ")
}


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

// both click and double click

document.getElementById("clickbtn").addEventListener("click",() => {
    console.log("click event");
})

document.getElementById("dblClickBtn").addEventListener("dblclick",() =>{
    console.log("DBL Click EVent");
})

document.getElementById("hoverbox").addEventListener("mouseover" ,() =>{
    document.getElementById("hoverbox").style.background = "yellow"
})

document.getElementById("hoverbox").addEventListener("mouseout" ,() =>{
    document.getElementById("hoverbox").style.background = "white"
})

document.getElementById("mousemovebox").addEventListener("mouseover", () =>{
    console.log("Mouse is Moving inside the box")
})

document.getElementById("mouseDownbtn").addEventListener("mousedown",() => {
    console.log("mouse button Pressed Down");
})

document.getElementById("mouseUpbtn").addEventListener("mouseup",() =>{
    console.log("mouse button Realesed");
})







