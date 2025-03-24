// Function to show paid users list
function showPaidList() {
    // Hide unpaid list
    document.getElementById('unpaidList').style.display = 'none';
    // Show paid list
    document.getElementById('paidList').style.display = 'block';
    
    // Highlight active button
    document.querySelector('.paid-btn').style.opacity = '1';
    document.querySelector('.unpaid-btn').style.opacity = '0.7';
}

// Function to show unpaid users list
function showUnpaidList() {
    // Hide paid list
    document.getElementById('paidList').style.display = 'none';
    // Show unpaid list
    document.getElementById('unpaidList').style.display = 'block';
    
    // Highlight active button
    document.querySelector('.unpaid-btn').style.opacity = '1';
    document.querySelector('.paid-btn').style.opacity = '0.7';
}

// Add event listeners for search functionality
document.querySelectorAll('.search-bar input').forEach(input => {
    input.addEventListener('keyup', function() {
        const searchTerm = this.value.toLowerCase();
        const tableRows = this.closest('.list-container').querySelectorAll('tbody tr');
        
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});