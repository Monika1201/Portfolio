setTimeout(() => {
    const loader = document.getElementById('loader');
    const loadingText = document.getElementById('loadingText');
    const startButton = document.getElementById('startButton');
    
    loader.style.display = 'none'; 
    loadingText.classList.add('hidden'); 
    startButton.style.display = 'inline-block'; 
}, 2000);

document.getElementById('startButton').addEventListener('click', () => {
    const loadingContainer = document.getElementById('loadingContainer');
    const portfolioContent = document.getElementById('portfolioContent');

    loadingContainer.style.display = 'none'; 
    portfolioContent.style.display = 'block'; 
});

const dynamicText = document.getElementById('dynamicText');
const textArray = ['Frontend Developer', 'Web Designer', 'Pixel Perfectionist'];
let index = 0;
let textIndex = 0;

function type() {
    if (textIndex < textArray[index].length) {
        dynamicText.textContent += textArray[index].charAt(textIndex);
        textIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            dynamicText.textContent = '';
            textIndex = 0;
            index = (index + 1) % textArray.length;
            type();
        }, 2000);
    }
}
setTimeout(() => {
    type();
}, 5000);
