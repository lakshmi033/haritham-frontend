document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    logoutBtn.addEventListener('click', function() {
        // Here you would typically handle the logout logic
        // For example, clearing session storage, cookies, etc.
        sessionStorage.clear();
        localStorage.clear();
        // Redirect to collector login page
        window.location.href = 'collectorlogin.html';
    });

    cancelBtn.addEventListener('click', function() {
        // Go back to the dashboard
        window.location.href = 'wastedash.html';
    });
}); 