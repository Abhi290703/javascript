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