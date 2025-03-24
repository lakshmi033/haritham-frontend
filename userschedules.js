let currentDate = new Date();
let scheduledDates = {};

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    // Add day headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    // Get first day of month and total days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Add empty spaces for days before first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendar.appendChild(document.createElement('div'));
    }

    // Add date buttons (without click functionality)
    for (let date = 1; date <= lastDay.getDate(); date++) {
        const dateButton = document.createElement('button');
        dateButton.className = 'date-button';
        dateButton.textContent = date;

        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${date}`;
        if (scheduledDates[dateString]) {
            dateButton.classList.add(scheduledDates[dateString].type);
        }
        
        // Remove the onclick handler
        calendar.appendChild(dateButton);
    }

    // Update month display
    document.getElementById('currentMonth').textContent = 
        currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar();
}

// Initialize calendar
generateCalendar();
