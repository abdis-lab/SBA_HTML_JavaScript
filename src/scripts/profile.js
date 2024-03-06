const sessionTableBody = document.querySelector('.session-table tbody');

// Example data (replace with actual data retrieval logic)
const sessionsData = [
    { name: 'Session 1', date: '2024-03-10', going: 15, cost: '$10' },
    { name: 'Session 2', date: '2024-03-15', going: 8, cost: '$15' },
    // Add more session data as needed
];

sessionsData.forEach(session => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${session.name}</td>
            <td>${session.date}</td>
            <td>${session.going}</td>
            <td>${session.cost}</td>
        `;
    sessionTableBody.appendChild(row);
});