const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let terms = document.getElementById("terms");

    let valid = true;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("termsError").textContent = "";

    username.style.border = "";
    email.style.border = "";
    password.style.border = "";

    if (username.value.trim() === "") {
        document.getElementById("usernameError").textContent = "Username required";
        username.style.border = "2px solid red";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email required";
        email.style.border = "2px solid red";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent = "Invalid email";
        email.style.border = "2px solid red";
        valid = false;
    }

    if (password.value.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
        password.style.border = "2px solid red";
        valid = false;
    }

    if (!terms.checked) {
        document.getElementById("termsError").textContent = "You must accept the terms";
        valid = false;
    }

    if (valid) {
        alert("Signup Successful!");
    }
});