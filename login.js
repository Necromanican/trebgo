/*async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("/.netlify/functions/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    const result = await response.json();

    if (result.success) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}
    */

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    try {
        const response = await fetch("/.netlify/functions/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const result = await response.json();

        if (result.success) {
            // Save login and time
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("loginTime", Date.now());

            // Go to homepage
            window.location.href = "index.html";
        } else {
            error.textContent = "Adik ka ba? mali nganiiiii.";
        }

    } catch (err) {
        error.textContent = "Login error. Please try again.";
        console.error(err);
    }
}