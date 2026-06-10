/* ==========================
   REGISTRATION PAGE
========================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration Successful!");

        window.location.href = "login.html";
    });
}

/* ==========================
   LOGIN PAGE
========================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            alert("Login Successful!");

            window.location.href = "quiz.html";
        } else {
            alert("Invalid Email or Password!");
        }
    });
}

/* ==========================
   QUIZ PAGE
========================== */

const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;

        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        if (q1 && q1.value === "a") score++;
        if (q2 && q2.value === "b") score++;
        if (q3 && q3.value === "a") score++;

        localStorage.setItem("score", score);

        window.location.href = "result.html";
    });
}

/* ==========================
   RESULT PAGE
========================== */

const scoreElement = document.getElementById("score");

if (scoreElement) {
    const finalScore = localStorage.getItem("score");

    if (finalScore !== null) {
        scoreElement.innerHTML = `Your Score : ${finalScore} / 3`;
    } else {
        scoreElement.innerHTML = "No Quiz Attempt Found!";
    }
}
