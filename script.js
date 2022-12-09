let USER = document.getElementById("user");
let PASS = document.getElementById("pass");
let out = document.getElementById("Access");
let enter = document.getElementById("btn").addEventListener("click", run);


function run() {
   
    let username = USER.value;
    let password = PASS.value;

    if(username === "admin" && password === "1234") {
        out.innerHTML = "Login Successful";

    } else if(username === "admin") {
        out.innerHTML = "Password Incorrect";

    } else if(password === "1234") {
        out.innerHTML = "Username Incorrect";

    } else {
        out.innerHTML = "Incorrect";
    }
}
