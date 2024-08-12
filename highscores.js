// Retrieve high scores from localStorage or initialize an empty array
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Display high scores in the table
const highScoreTable = document.getElementById('highScoreTable');
highScores.forEach((score, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${score}</td>
    `;
    highScoreTable.appendChild(row);
});