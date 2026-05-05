const message = document.getElementById("message");
const form = document.getElementById("loginForm");

form.addEventListener("click", () => {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === 'admin' && password === '1234') {
        message.textContent = "Login Successful";
        message.style.color = 'green';
    } else {
        message.textContent = 'Login Failed: Please try again!';
        message.style.color = 'red';
    }
});