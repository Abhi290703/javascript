document.getElementById("myform").addEventListener("submit", function(e) {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errormsg = "";

    if(username === ""){
        errormsg += "username must be required.<br>";
    }
    if(email === ""){
        errormsg += "email must be required.<br>";
    }
    if(password === "" || password.length > 6){
        errormsg += "password must have more than 6 letters"
    }

    if (errormsg !== ""){
        document.getElementById("error").innerHTML = errormsg;
        e.preventDefault();
    }
})

/*

regex :
why :
syntax :
let pattern = /pattern/---literal syntax
let pattern = new RegExp("pattern")---constructor

caret :
^ - start with
meaning : matches the beginning of a string
example : ^a - matches any string that strings with 'a'


*/ 

let pattern = /abc/;
console.log(pattern.test("fghjk"));
// here we have not used regex and directly given values 
// here also if we given wrong values to it will not take values it shows false values to it.

let pattern2 = RegExp("abc");
console.log(pattern2.test("xyz"));

// here we have used regexexp format it tell which one true or false according to the 
// given variable in the declaration.


let show = /^abc/;
console.log(show.test("abc"));
console.log(show.test("gncvbnm"));
// in this caret form we ^ this represents it should start from that letter only if not it throws an error





