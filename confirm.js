document.addEventListener('DOMContentLoaded', function () {
    // Retrieve selected services from localStorage
    const selectedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];
    const totalAmount = localStorage.getItem('totalAmount') || '0.00';
    const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails')) || {};

    // Display selected services
    const selectedServicesContainer = document.getElementById('display-selected-services');
    selectedServices.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <span>${service.name}</span>
            <span>$${service.price.toFixed(2)}</span>
        `;
        selectedServicesContainer.appendChild(serviceItem);
    });

    // Display total amount
    document.getElementById('display-total-amount').textContent = totalAmount;

    // Display payment details
    const paymentDetailsContainer = document.getElementById('display-payment-details');
    paymentDetailsContainer.innerHTML = `
        <p>Name on Card: ${paymentDetails.cardName}</p>
        <p>Card Number: ${paymentDetails.cardNumber}</p>
        <p>Expiry Date: ${paymentDetails.expiryDate}</p>
        <p>CVC: ${paymentDetails.cvc}</p>
    `;

    // Print confirmation
    document.getElementById('print-confirmation').addEventListener('click', function () {
        const printContent = `
            <h2>Payment Confirmation</h2>
            <p>Total Amount: $${totalAmount}</p>
            <h3>Selected Services:</h3>
            ${selectedServices.map(service => `
                <p>${service.name}: $${service.price.toFixed(2)}</p>
            `).join('')}
            <h3>Payment Details:</h3>
            <p>Name on Card: ${paymentDetails.cardName}</p>
            <p>Card Number: ${paymentDetails.cardNumber}</p>
            <p>Expiry Date: ${paymentDetails.expiryDate}</p>
            <p>CVC: ${paymentDetails.cvc}</p>
        `;

        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.write('<html><head><title>Print Confirmation</title></head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });
});