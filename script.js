function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let msg = document.getElementById("msg");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        msg.innerHTML = "<p class='error'>All fields are required!</p>";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        msg.innerHTML = "<p class='error'>Enter a valid email!</p>";
        return;
    }

    if (password.length < 6) {
        msg.innerHTML = "<p class='error'>Password must be at least 6 characters!</p>";
        return;
    }

    if (password !== confirmPassword) {
        msg.innerHTML = "<p class='error'>Passwords do not match!</p>";
        return;
    }

    msg.innerHTML = "<p class='success'>Registration Successful!</p>";
}
