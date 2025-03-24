// Function to toggle edit mode for the profile fields
function toggleEditMode() {
    let inputs = document.querySelectorAll('.profile-container input');
    let button = document.querySelector('.profile-container button');
    
    if (inputs[0].disabled) {
        // Enable editing
        inputs.forEach(input => {
            input.disabled = false;
            input.style.cursor = "text";  // Change cursor to indicate editable fields
            input.style.backgroundColor = "white";  // Make background white when editable
        });
        button.textContent = 'Save';  // Change button text to 'Save'
    } else {
        // Disable editing and save the profile data
        inputs.forEach(input => {
            input.disabled = true;
            input.style.cursor = "not-allowed";  // Change cursor to indicate non-editable fields
            input.style.backgroundColor = "#f5f5f5";  // Change background color for disabled inputs
        });
        button.textContent = 'Edit';  // Change button text to 'Edit'

        // Simulate saving profile data to a backend
        let updatedProfile = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            place: document.getElementById('place').value,
            ward: document.getElementById('ward').value,
        };

        // Assuming an API endpoint exists to handle profile updates
        // Uncomment and modify the following lines to send the data to your server
        /*
        fetch('API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProfile)
        })
        .then(response => response.json())
        .then(data => {
            alert('Profile Updated Successfully!');
        })
        .catch(error => alert('Error updating profile.'));
        */

        // For now, just simulate a successful update with an alert
        alert('Profile Updated Successfully!');
    }
}
