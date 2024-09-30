document.addEventListener('DOMContentLoaded', function () {
    // Get total amount from localStorage
    const totalAmount = localStorage.getItem('totalAmount') || '0.00';
    document.getElementById('total-amount').innerText = `$${totalAmount}`;

    // Handle form submission
    document.getElementById('payment-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get payment details
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvc = document.getElementById('cvc').value;

        // Save payment details in localStorage
        const paymentDetails = {
            cardName,
            cardNumber: '**** **** **** ' + cardNumber.slice(-4), // Show only last 4 digits
            expiryDate,
            cvc: '*' // Mask CVC
        };
        localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

        // Redirect to confirmation page
        window.location.href = 'confirm.html';
    });
});
