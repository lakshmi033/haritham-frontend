import { auth, db } from './firebase-config.js';

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (!user) {
        // If not authenticated, redirect to login page
        window.location.href = 'login.html';
    } else {
        // Load user data
        loadUserData(user.uid);
    }
});

// Load user data from Firestore
async function loadUserData(userId) {
    try {
        // Get user document
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            
            // Get notifications
            const notifications = await db.collection('notifications')
                .where('userId', '==', userId)
                .where('read', '==', false)
                .get();

            // Get schedule for user's ward
            const schedule = await db.collection('schedules')
                .doc(userData.wardNumber.toString())
                .get();

            // Get user's complaints
            const complaints = await db.collection('complaints')
                .where('userId', '==', userId)
                .orderBy('timestamp', 'desc')
                .limit(5)
                .get();

            // Get user's payments
            const payments = await db.collection('payments')
                .where('userId', '==', userId)
                .orderBy('timestamp', 'desc')
                .limit(1)
                .get();

            // Update dashboard with all data
            updateDashboard({
                user: userData,
                notifications: notifications.docs,
                schedule: schedule.data(),
                complaints: complaints.docs,
                payments: payments.docs
            });
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Update dashboard UI with user data
function updateDashboard(data) {
    // Update Notifications widget
    const notificationWidget = document.querySelector('a[href="usernotification.html"]');
    const unreadCount = data.notifications.length;
    notificationWidget.innerHTML = `Notifications ${unreadCount > 0 ? `(${unreadCount})` : ''}`;
    
    // Update Schedule widget
    const scheduleWidget = document.querySelector('a[href="userschedules.html"]');
    if (data.schedule) {
        const nextCollectionDay = getNextCollectionDay(data.schedule.collectionDays);
        scheduleWidget.innerHTML = `Schedules<br>Next: ${nextCollectionDay}`;
    }

    // Update Payment widget
    const paymentWidget = document.querySelector('a[href="userpay.html"]');
    if (data.payments && data.payments.length > 0) {
        const latestPayment = data.payments[0].data();
        paymentWidget.innerHTML = `Payment<br>Status: ${latestPayment.status}`;
    }

    // Update Complaints widget
    const complaintWidget = document.querySelector('a[href="usercomplaint.html"]');
    const pendingComplaints = data.complaints.filter(doc => doc.data().status === 'pending').length;
    complaintWidget.innerHTML = `Complaints ${pendingComplaints > 0 ? `(${pendingComplaints} pending)` : ''}`;
}

// Helper function to get next collection day
function getNextCollectionDay(collectionDays) {
    const today = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const nextDay = collectionDays.find(day => {
        const dayIndex = days.indexOf(day);
        return dayIndex >= today;
    }) || collectionDays[0];
    return nextDay;
}

// Handle logout
async function handleLogout() {
    try {
        await auth.signOut();
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

// Save complaint
async function saveComplaint(complaintData) {
    try {
        const userId = auth.currentUser.uid;
        const userDoc = await db.collection('users').doc(userId).get();
        const userData = userDoc.data();

        await db.collection('complaints').add({
            userId: userId,
            wardNumber: userData.wardNumber,
            type: complaintData.type,
            description: complaintData.description,
            status: 'pending',
            timestamp: firebase.firestore.Timestamp.now(),
            priority: complaintData.priority || 'medium'
        });
        alert('Complaint submitted successfully!');
    } catch (error) {
        console.error('Error saving complaint:', error);
        alert('Error submitting complaint. Please try again.');
    }
}

// Process payment
async function processPayment(paymentDetails) {
    try {
        const userId = auth.currentUser.uid;
        const paymentRef = await db.collection('payments').add({
            userId: userId,
            amount: paymentDetails.amount,
            month: paymentDetails.month,
            status: 'pending',
            timestamp: firebase.firestore.Timestamp.now(),
            paymentMethod: paymentDetails.paymentMethod
        });

        // Update user's payment status
        await db.collection('users').doc(userId).update({
            lastPaymentDate: firebase.firestore.Timestamp.now(),
            paymentStatus: 'pending'
        });

        alert('Payment initiated successfully!');
        return paymentRef.id;
    } catch (error) {
        console.error('Error processing payment:', error);
        alert('Error processing payment. Please try again.');
    }
}

// Update user profile
async function updateUserProfile(profileData) {
    try {
        const userId = auth.currentUser.uid;
        await db.collection('users').doc(userId).update({
            name: profileData.name,
            phone: profileData.phone,
            memberCount: profileData.memberCount,
            address: profileData.address
        });
        alert('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Error updating profile. Please try again.');
    }
}

// Make functions available globally
window.handleLogout = handleLogout;
window.saveComplaint = saveComplaint;
window.processPayment = processPayment;
window.updateUserProfile = updateUserProfile;
