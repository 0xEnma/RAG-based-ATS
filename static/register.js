document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = registerForm.username.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;

        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                alert("Registration successful! Please login.");
                window.location.href = "/";
            } else {
                alert("Registration failed. Username might already exist.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Connection error to Auth Service (Java)");
        }
    });
});
