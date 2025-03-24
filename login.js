// Login form handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log the values entered in the form
    console.log("Email entered:", email);
    console.log("Password entered:", password);

    // Simple email validation (check if it's a valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(email)) {
        alert("Login successful!");
        window.location.href = "userdash.html"; // Redirect to the user dashboard
    } else {
        alert("Invalid email format. Please enter a valid email.");
    }
});
