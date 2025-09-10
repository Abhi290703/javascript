function Signup(){
    let username = document.getElementById('name').value;
    let password = document.getElementById('Password').value;
    localStorage.setItem("uN",username);
    localStorage.setItem("Password",password);
 alert("Account Created");
}


function login(){
    let userName = document.getElementById("Name").value;
    let pwd = document.getElementById("password").value;
    let checkName = localStorage.getItem("uN");
    let checkPass = localStorage.getItem("Password");
    if(userName === checkName && pwd === checkPass)
    {
        document.getElementById("data").innerText = `Welcome ${userName}`;
        alert("Welcome");
    }
    else
    {
         document.getElementById("data").innerText = `Invalid Credentials`;
         alert("Error");
    }
}