// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    if (button && message) {
        button.addEventListener('click', () => {
            message.textContent = 'Button clicked! Welcome to Git & GitHub!';
            console.log('Button was clicked!'); // Add this line
        });
    }
});
