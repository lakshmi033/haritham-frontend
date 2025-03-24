document.addEventListener("DOMContentLoaded", function () {
    // Function to handle navigation
    function navigateTo(page) {
        window.location.href = page;
    }

    // Button Event Listeners
    const buttonActions = {
        'monitoring-button': 'adminmonitor.html',
        'payment-check-button': 'adminpayment.html',
        'complaints-check-button': 'admincomplaint.html',
        'dashboard': () => alert("Dashboard clicked!"),
        'profile': () => alert("Profile clicked!"),
        'settings': () => alert("Settings clicked!"),
        'logout': () => alert("Logging out..."),
    };

    Object.keys(buttonActions).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                const action = buttonActions[id];
                if (typeof action === 'string') {
                    navigateTo(action);
                } else {
                    action();
                }
            });
        }
    });
});
