let wrongCount = 0;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let errorMessage = "";

    if (email.indexOf("@") === -1) {
        errorMessage += "Email must contain @<br>";
    }

    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters<br>";
    }

    if (password.indexOf("#") === -1) {
        errorMessage += "Password must contain #<br>";
    }

    if (errorMessage !== "") {

        wrongCount++;
        document.getElementById("errorMsg").innerHTML = errorMessage;
        document.getElementById("countMsg").innerHTML =
            "Wrong Attempts: " + wrongCount;

    } else {

        document.getElementById("errorMsg").innerHTML = "";

        alert("Login Successful!");

        document.getElementById("loginForm").reset();
    }

});