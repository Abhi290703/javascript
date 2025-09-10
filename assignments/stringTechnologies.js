function Signup() {
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    localStorage.setItem("Un", Username);
    localStorage.setItem("pwd", Password);
    alert("Account Created");
}

function login() {
    let UserName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkName = localStorage.getItem("Un");
    let checkPassword = localStorage.getItem("pwd");

    if (UserName === checkName && password === checkPassword) {
        document.getElementById("data").innerText = `Welcome ${UserName}`;
        alert("Welcome");
    } else {
        document.getElementById("data").innerText = "Invalid Credentials";
        alert("Error");
    }
}
