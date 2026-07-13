async function login() {

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