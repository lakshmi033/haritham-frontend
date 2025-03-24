import { db, auth } from './firebase-config.js';

// Demo data setup
async function setupDemoData() {
    try {
        // Setup Wards
        const wards = [
            { wardNumber: 1, name: "Kunnathur North", collectorId: "collector1" },
            { wardNumber: 2, name: "Kunnathur South", collectorId: "collector2" },
            { wardNumber: 3, name: "Kunnathur East", collectorId: "collector3" },
            { wardNumber: 4, name: "Kunnathur West", collectorId: "collector4" },
            { wardNumber: 5, name: "Kunnathur Central", collectorId: "collector5" }
        ];

        // Setup Users (Demo households)
        const users = [
            {
                userId: "user1",
                name: "Rahul Kumar",
                email: "rahul@example.com",
                wardNumber: 1,
                houseNumber: "123/A",
                phone: "9876543210",
                memberCount: 4,
                address: "123/A, Kunnathur North",
                registrationDate: firebase.firestore.Timestamp.now(),
                lastPaymentDate: firebase.firestore.Timestamp.now(),
                paymentStatus: "paid"
            },
            {
                userId: "user2",
                name: "Priya Menon",
                email: "priya@example.com",
                wardNumber: 2,
                houseNumber: "45/B",
                phone: "9876543211",
                memberCount: 3,
                address: "45/B, Kunnathur South",
                registrationDate: firebase.firestore.Timestamp.now(),
                lastPaymentDate: firebase.firestore.Timestamp.now(),
                paymentStatus: "pending"
            }
        ];

        // Setup Schedules
        const schedules = [
            {
                wardNumber: 1,
                collectionDays: ["Monday", "Thursday"],
                timeSlot: "7:00 AM - 9:00 AM",
                collectorName: "Rajesh K",
                collectorPhone: "9876543220",
                wasteTypes: ["Biodegradable", "Non-biodegradable"],
                lastUpdated: firebase.firestore.Timestamp.now()
            },
            {
                wardNumber: 2,
                collectionDays: ["Tuesday", "Friday"],
                timeSlot: "8:00 AM - 10:00 AM",
                collectorName: "Suresh M",
                collectorPhone: "9876543221",
                wasteTypes: ["Biodegradable", "Non-biodegradable"],
                lastUpdated: firebase.firestore.Timestamp.now()
            }
        ];

        // Setup Complaints
        const complaints = [
            {
                userId: "user1",
                wardNumber: 1,
                type: "Missed Collection",
                description: "Waste not collected on scheduled day",
                status: "pending",
                timestamp: firebase.firestore.Timestamp.now(),
                priority: "high"
            },
            {
                userId: "user2",
                wardNumber: 2,
                type: "Improper Segregation",
                description: "Neighbors not segregating waste properly",
                status: "resolved",
                timestamp: firebase.firestore.Timestamp.now(),
                priority: "medium",
                resolution: "Awareness session conducted"
            }
        ];

        // Setup Payments
        const payments = [
            {
                userId: "user1",
                amount: 100,
                month: "January 2024",
                status: "paid",
                timestamp: firebase.firestore.Timestamp.now(),
                paymentMethod: "UPI",
                transactionId: "TXN123456"
            },
            {
                userId: "user2",
                amount: 100,
                month: "January 2024",
                status: "pending",
                dueDate: firebase.firestore.Timestamp.now()
            }
        ];

        // Setup Notifications
        const notifications = [
            {
                userId: "user1",
                title: "Schedule Change",
                message: "Collection timing changed to 8:00 AM starting next week",
                timestamp: firebase.firestore.Timestamp.now(),
                read: false,
                type: "schedule"
            },
            {
                userId: "user2",
                title: "Payment Reminder",
                message: "Monthly waste collection fee payment is pending",
                timestamp: firebase.firestore.Timestamp.now(),
                read: false,
                type: "payment"
            }
        ];

        // Batch write to Firestore
        const batch = db.batch();

        // Add wards
        wards.forEach(ward => {
            const wardRef = db.collection('wards').doc(ward.wardNumber.toString());
            batch.set(wardRef, ward);
        });

        // Add users
        users.forEach(user => {
            const userRef = db.collection('users').doc(user.userId);
            batch.set(userRef, user);
        });

        // Add schedules
        schedules.forEach(schedule => {
            const scheduleRef = db.collection('schedules').doc(schedule.wardNumber.toString());
            batch.set(scheduleRef, schedule);
        });

        // Add complaints
        complaints.forEach((complaint, index) => {
            const complaintRef = db.collection('complaints').doc(`complaint${index + 1}`);
            batch.set(complaintRef, complaint);
        });

        // Add payments
        payments.forEach((payment, index) => {
            const paymentRef = db.collection('payments').doc(`payment${index + 1}`);
            batch.set(paymentRef, payment);
        });

        // Add notifications
        notifications.forEach((notification, index) => {
            const notificationRef = db.collection('notifications').doc(`notification${index + 1}`);
            batch.set(notificationRef, notification);
        });

        // Commit the batch
        await batch.commit();
        console.log("Demo data setup completed successfully!");

    } catch (error) {
        console.error("Error setting up demo data:", error);
    }
}

// Run the setup
setupDemoData(); 