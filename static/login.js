document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("username", data.username);
                window.location.href = "/chat";
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Connection error to Auth Service (Java)");
        }
    });
});
