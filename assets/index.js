

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