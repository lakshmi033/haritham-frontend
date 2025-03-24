// Simulated payment data
let paymentHistory = [
    {
        date: '2024-01-15',
        amount: 50,
        mode: 'Offline',
        status: 'Paid'
    },
    {
        date: '2023-12-10',
        amount: 50,
        mode: 'Online',
        status: 'Paid'
    }
];

// Check if current month payment is already made
function isCurrentMonthPaid() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return paymentHistory.some(payment => {
        const paymentDate = new Date(payment.date);
        return paymentDate.getMonth() === currentMonth && 
               paymentDate.getFullYear() === currentYear;
    });
}

// Update payment status display
function updatePaymentStatus() {
    const statusLabel = document.getElementById('paymentStatus');
    const payButton = document.getElementById('payButton');

    if (isCurrentMonthPaid()) {
        statusLabel.textContent = 'PAID';
        statusLabel.className = 'status-label status-paid';
        payButton.disabled = true;
        payButton.textContent = 'Paid for Current Month';
    } else {
        statusLabel.textContent = 'PAYMENT PENDING';
        statusLabel.className = 'status-label status-pending';
        payButton.disabled = false;
        payButton.textContent = 'Pay Now - ₹50';
    }
}

// Handle payment
function makePayment() {
    if (confirm('Proceed to payment gateway?')) {
        document.getElementById('paymentModal').style.display = 'flex';
    }
}

function showUPISection() {
    document.getElementById('upiSection').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('upiSection').style.display = 'none';
}

function processUPIPayment() {
    const upiId = document.getElementById('upiInput').value;
    if (!upiId) {
        alert('Please enter UPI ID');
        return;
    }

    // Simulate payment processing
    alert('Redirecting to UPI app...');
    
    // In a real implementation, you would integrate with a payment gateway here
    setTimeout(() => {
        // Simulate successful payment
        const currentDate = new Date();
        paymentHistory.unshift({
            date: currentDate.toISOString().split('T')[0],
            amount: 50,
            mode: 'UPI',
            status: 'Paid'
        });

        updatePaymentStatus();
        closePaymentModal();
        alert('Payment successful!');
    }, 2000);
}

// Initialize page
updatePaymentStatus();
