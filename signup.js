document.addEventListener("DOMContentLoaded", function() {
    console.log("Sign Up Page Loaded!");

    const signupForm = document.getElementById('signupForm');

    // Optionally, add form validation before Firebase logic
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Basic client-side validation
        if (email === "" || password === "") {
            alert("Please fill out all fields.");
            return;
        }

        console.log("Form submitted with:", email, password);
    });
});
