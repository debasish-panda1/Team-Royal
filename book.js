
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Check if the form is valid
    if (this.checkValidity() && document.querySelectorAll('input[name="services"]:checked').length > 0) {
        document.getElementById('booking-form').reset(); // Reset form fields
        document.getElementById('popup').classList.remove('hidden'); // Show popup
    } else {
        // Optional: Highlight invalid fields or show an error message
        alert('Please fill out all fields and select at least one service.');
    }
});

// Close the popup when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

// Close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').classList.add('hidden');
    }
});

// Close the popup when the Go Back button is clicked
document.querySelector('.go-back-btn').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});