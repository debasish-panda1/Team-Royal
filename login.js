const loginForm = document.querySelector('.login-form');
const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
loginForm.appendChild(errorMessage);

// Array of valid usernames and passwords
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "admin", password: "admin123" }
];

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    // Check if the entered credentials match any user
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);
    
    if (user) {
        // Successful login - redirect to homepage
        window.location.href = "index.html";
    } else {
        // Login failed - display a message below the form
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block'; // Ensure the error message is visible
    }
});

document.getElementById('hamburger-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    var menu = document.querySelector('.navbar-menu');
    
    // Toggle the "open" class to show or hide the menu
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        navbar.classList.remove('open'); // Remove open class
    } else {
        menu.style.display = 'flex';
        navbar.classList.add('open'); // Add open class
    }
});

document.getElementById('cross-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    var menu = document.querySelector('.navbar-menu');

    // Close the menu
    menu.style.display = 'none';
    navbar.classList.remove('open');
});