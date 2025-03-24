// Function to update the password
function updatePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
        alert("New passwords don't match!");
        return;
    }

    // Simulate the password update logic here
    alert('Password updated successfully!');
    clearPasswordFields();
}

// Function to save settings and display success message
function saveSettings() {
    // Get notification preferences
    const emailNotif = document.getElementById('emailNotif').checked;
    const smsNotif = document.getElementById('smsNotif').checked;
    const reminderAlert = document.getElementById('reminderAlert').checked;

    // Save settings logic here
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Function to clear the password input fields after update
function clearPasswordFields() {
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}
