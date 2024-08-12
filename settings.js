// Retrieve settings from localStorage or set default values
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
let difficulty = localStorage.getItem('difficulty') || 'medium';

// Update settings based on user input
const soundToggle = document.getElementById('soundToggle');
const difficultySelect = document.getElementById('difficultySelect');

soundToggle.checked = soundEnabled;
difficultySelect.value = difficulty;

soundToggle.addEventListener('change', () => {
    soundEnabled = soundToggle.checked;
    localStorage.setItem('soundEnabled', soundEnabled);
});

difficultySelect.addEventListener('change', () => {
    difficulty = difficultySelect.value;
    localStorage.setItem('difficulty', difficulty);
});