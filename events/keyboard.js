/*

in keyboard events their are 3 types :

1.keydown : it means if we press the key it shows the how many times we have pressed the key.
2.keyup : it means it shows the when  we released.
3.keypress : it follows same has the keydown.



*/

let keyboard = document.getElementById("inputbox"); // here inputnn=box is id we have declared at the html
keyboard.addEventListener("keydown",(e) => {    // e is the property we have declare it everytime
    console.log(`key "${e.key}" pressed down`) // e.key is also same 
})

keyboard.addEventListener("keyup",(e) => {
    console.log(`key "${e.key}" released`)
})

keyboard.addEventListener("keypress",(e) => {
    console.log(`key "${e.key}" pressed`)
})