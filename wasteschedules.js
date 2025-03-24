let currentDate = new Date();
let scheduledDates = {};

function generateCalendar() {
    const calendar = document.getElementById("calendar");
    calendar.innerHTML = ""; // Clear previous calendar content

    // Add day headers (Sun, Mon, ...)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.className = "calendar-day";
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    // Get first day of month and total days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add empty spaces before first day of month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendar.appendChild(emptyDiv);
    }

    // Generate date buttons
    for (let date = 1; date <= lastDay; date++) {
        const dateButton = document.createElement("button");
        dateButton.className = "date-button";
        dateButton.textContent = date;

        // Corrected template literal for dateString
        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${date}`;

        // Assign color based on scheduled waste type
        if (scheduledDates[dateString]) {
            const wasteType = scheduledDates[dateString].type;
            setWasteTypeColor(dateButton, wasteType);
        } else {
            dateButton.style.backgroundColor = "#ff4444"; // Default red color for unscheduled days
            dateButton.style.color = "white";
        }

        dateButton.onclick = () => toggleWasteType(dateString, dateButton);
        calendar.appendChild(dateButton);
    }

    // Update month display
    document.getElementById("currentMonth").textContent =
        currentDate.toLocaleString("default", { month: "long", year: "numeric" });
}

// Function to set waste type color
function setWasteTypeColor(button, wasteType) {
    const colors = {
        plastic: ["#FFD700", "black"],
        leather: ["#000000", "white"],
        glass: ["#87CEEB", "black"],
        ewaste: ["#ed0707", "black"],
        cloth: ["#00008B", "white"],
        medical: ["#FFC0CB", "black"],
        footwear: ["#008000", "white"],
        "medical-strip": ["#800080", "white"]
    };

    if (colors[wasteType]) {
        button.style.backgroundColor = colors[wasteType][0];
        button.style.color = colors[wasteType][1];
    }
}

// Toggle waste type selection on calendar
function toggleWasteType(dateString, button) {
    const wasteType = document.getElementById("wasteType").value;

    if (!wasteType) {
        alert("Please select a waste type first!");
        return;
    }

    if (!scheduledDates[dateString]) {
        scheduledDates[dateString] = {
            type: wasteType,
            time: document.getElementById("timeSlot").value
        };
        setWasteTypeColor(button, wasteType);
    } else {
        delete scheduledDates[dateString];
        button.style.backgroundColor = "#ff4444"; // Reset to default red
        button.style.color = "white";
    }
}

// Navigation between months
function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Ensure the calendar loads when the page is ready
document.addEventListener("DOMContentLoaded", generateCalendar);
