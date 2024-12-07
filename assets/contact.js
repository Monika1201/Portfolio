document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const message = document.querySelector('textarea').value;
    if (!name || !email || !phone || !message) {
        alert('All fields are required!');
        return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for reaching out! We will get back to you soon.');
    document.querySelector('form').reset();
});