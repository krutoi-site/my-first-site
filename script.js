function login() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if (login === "admin" && password === "admin123") {
        document.getElementById("login-window").style.display = "none";
        document.getElementById("result").textContent = "админ";
    }
    else if (login === "user" && password === "user123") {
        document.getElementById("login-window").style.display = "none";
        document.getElementById("result").textContent = "user";
    }
    else {
        alert("Неверный логин или пароль");
    }
}
