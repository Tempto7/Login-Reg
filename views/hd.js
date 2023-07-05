const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click",function(){
    window.location.href="/login";
})

console.log("inside home.js");
const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click",function(){
    window.location.href="/signup";
})