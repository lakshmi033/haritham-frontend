const wardData = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
};

function showWardDetails(wardNumber) {
    const container = document.getElementById('wardDetailsContainer');
    const title = document.getElementById('wardTitle');
    const tableBody = document.getElementById('wardTableBody');
    const searchInput = document.getElementById('searchInput');

    container.style.opacity = '0';
    container.style.display = 'block';
    setTimeout(() => {
        container.style.opacity = '1';
    }, 10);

    title.textContent = `WARD ${wardNumber} Details`;
    searchInput.value = '';
    displayWardData(wardNumber);
    searchInput.oninput = () => filterWardData(wardNumber);

    document.querySelectorAll('.ward-buttons button').forEach(button => {
        button.classList.toggle('active', button.textContent === `WARD ${wardNumber}`);
    });
}

function displayWardData(wardNumber, filterText = '') {
    const tableBody = document.getElementById('wardTableBody');
    tableBody.innerHTML = '';

    const filteredData = wardData[wardNumber].filter(house => 
        house.houseNo.toLowerCase().includes(filterText.toLowerCase()) ||
        house.houseName.toLowerCase().includes(filterText.toLowerCase()) ||
        house.guardianName.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredData.forEach(house => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${house.houseNo}</td>
            <td>${house.houseName}</td>
            <td>${house.guardianName}</td>
            <td><span class="payment-status ${house.paymentStatus.toLowerCase()}">${house.paymentStatus}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

function filterWardData(wardNumber) {
    const searchInput = document.getElementById('searchInput');
    displayWardData(wardNumber, searchInput.value);
}

document.addEventListener('DOMContentLoaded', () => {
    showWardDetails(1);
});
