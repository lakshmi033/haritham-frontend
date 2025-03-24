function submitComplaint() {
    const complaintText = document.getElementById('complaintText').value;
    
    if (!complaintText.trim()) {
        alert('Please enter your complaint before sending.');
        return;
    }

    // Create new complaint element
    const complaint = document.createElement('div');
    complaint.className = 'complaint-item';
    
    const date = new Date();
    complaint.innerHTML = `
        ${complaintText}
        <div class="complaint-time">${date.toLocaleString()}</div>
    `;

    // Add to complaints list
    document.getElementById('complaintsList').prepend(complaint);

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);

    // Clear input
    document.getElementById('complaintText').value = '';
}
