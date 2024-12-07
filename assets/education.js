
function calculateProgress(startYear, endYear) {
    const currentYear = new Date().getFullYear();
    const totalYears = endYear - startYear;
    const elapsedYears = Math.min(currentYear - startYear, totalYears);
    return (elapsedYears / totalYears) * 100;
}
function createProgressBar(progressPercentage) {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = `${progressPercentage}%`;
    return progressBar;
}
document.querySelectorAll('.card-status').forEach(status => {
    if (status.textContent.includes('Pursuing')) {
        const progress = calculateProgress(2022, 2026); 
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        const progressBar = createProgressBar(progress);
        progressContainer.appendChild(progressBar);
        status.appendChild(progressContainer);
    }
    if (status.textContent.includes('2020-2022')) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        const progressBar = createProgressBar(100); 
        progressContainer.appendChild(progressBar);
        status.appendChild(progressContainer);
    }
});
