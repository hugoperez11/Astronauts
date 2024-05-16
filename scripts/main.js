const form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

});