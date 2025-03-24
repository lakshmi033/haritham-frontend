let html5QrCode = null;

async function startScanner() {
    try {
        // Create instance of QR scanner
        html5QrCode = new Html5Qrcode("qr-reader");
        
        // Show overlay and scanner container
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('.qr-scanner-container').style.display = 'block';
        
        // Start scanning with environment facing camera
        await html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                aspectRatio: 1.0
            },
            (decodedText) => {
                // On successful scan
                document.getElementById("scannedData").innerText = decodedText;
                document.getElementById("scanSuccess").style.display = "block";
                html5QrCode.stop();
            },
            (errorMessage) => {
                console.error(errorMessage);
            }
        );
    } catch (err) {
        console.error("QR Code Scanner Error: ", err);
        alert("Failed to start camera. Please make sure you have granted camera permissions.");
        closeScanner();
    }
}

function closeScanner() {
    // Hide success message
    document.getElementById("scanSuccess").style.display = "none";
    
    // Stop scanner if it's running
    if (html5QrCode) {
        html5QrCode.stop().then(() => {
            // Hide overlay and scanner container
            document.getElementById('overlay').style.display = 'none';
            document.querySelector('.qr-scanner-container').style.display = 'none';
            html5QrCode = null;
        }).catch(err => {
            console.error("Error stopping scanner: ", err);
        });
    }
}

// ✅ Navigate to Notifications Page
function navigateToNotifications() {
    window.location.href = "wastenotification.html";
}

// ✅ Navigate to Profile Page
function navigateToProfile() {
    window.location.href = "wasteprofile.html";
}

// ✅ Navigate to Settings Page
function navigateToSettings() {
    window.location.href = "wastesettings.html";
}

// ✅ Navigate to Waste Collection Schedules Page
function navigateToSchedules() {
    window.location.href = "wasteschedules.html";
}

function showAlert(section) {
    if (section === 'Payment') {
        window.location.href = 'ward_details.html';
    } else if (section === 'Schedules') {
        navigateToSchedules();
    } else {
        alert(`You clicked on ${section}`);
    }
}
