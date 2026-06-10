alert("JavaScript Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Registration Successful");

            window.location.href = "login.html";

        });

    }

});
