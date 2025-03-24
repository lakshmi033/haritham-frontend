document.addEventListener("DOMContentLoaded", function() {
    console.log("Haritham Website Loaded!");

    // Firebase initialization
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(); // Firebase Auth instance
    const db = firebase.firestore(); // Firestore database instance

    // Firebase Authentication: Example of how to check if a user is logged in
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User is logged in:", user.email);
        } else {
            console.log("No user is logged in");
        }
    });

    // Event listener for button clicks
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log(`Navigating to: ${this.getAttribute("href")}`);
        });
    });
});
