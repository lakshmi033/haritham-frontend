document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get email and password values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy authentication check (Replace with actual authentication logic)
    if (email && password) {  
        window.location.href = "wastedash.html"; // Redirect to dashboard
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

function updatePassword() { 
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("New passwords don't match!");
        return;
    }

    // Add your password update logic here
    alert('Password updated successfully!');
    clearPasswordFields();
    showSuccessMessage();
}

function clearPasswordFields() {
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

