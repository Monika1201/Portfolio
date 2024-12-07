document.querySelector('.profile img').addEventListener('mouseenter', () => {
    document.querySelector('.profile img').classList.add('animate');
});

document.querySelector('.profile img').addEventListener('mouseleave', () => {
    document.querySelector('.profile img').classList.remove('animate');
});

