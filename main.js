let tableData = [];

function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    tableData.forEach((item, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.year}</td>
                <td><span class="edit-btn" onclick="editItem(${index})">✏️</span></td>
                <td><span class="delete-btn" onclick="deleteItem(${index})">❌</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function addItem() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const year = document.getElementById('year').value;

    if (name && category && year) {
        tableData.push({ name, category, year });
        renderTable();
        clearInputs();
    }
}

function deleteItem(index) {
    tableData.splice(index, 1);
    renderTable();
}

function editItem(index) {
    const item = tableData[index];
    document.getElementById('name').value = item.name;
    document.getElementById('category').value = item.category;
    document.getElementById('year').value = item.year;
    tableData.splice(index, 1);
    renderTable();
}

function searchItem() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredData = tableData.filter(item => item.name.toLowerCase().includes(query));
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    filteredData.forEach((item, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.year}</td>
                <td><span class="edit-btn" onclick="editItem(${index})">✏️</span></td>
                <td><span class="delete-btn" onclick="deleteItem(${index})">❌</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('category').value = '';
    document.getElementById('year').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
