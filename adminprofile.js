function toggleEditMode() {
    let inputs = document.querySelectorAll('.profile-container input');
    let button = document.querySelector('.profile-container button');
    
    if (inputs[0].disabled) {
        inputs.forEach(input => {
            input.disabled = false;
            input.style.cursor = "text";
            input.style.backgroundColor = "white";
        });
        button.textContent = 'Save';
    } else {
        inputs.forEach(input => {
            input.disabled = true;
            input.style.cursor = "not-allowed";
            input.style.backgroundColor = "#f5f5f5";
        });
        button.textContent = 'Edit';
        alert('Profile Updated Successfully!');
    }
}