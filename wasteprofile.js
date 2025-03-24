// Login form handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (you can improve this)
    if (email && password) {
        // Simulate successful login and redirect to the dashboard
        window.location.href = "userdash.html"; // Redirect to the user dashboard page
    } else {
        alert("Please fill out both fields.");
    }
});
