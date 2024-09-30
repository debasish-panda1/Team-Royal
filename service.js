window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.add-btn');
    const selectedServicesList = document.getElementById('selected-services');
    const totalAmountElem = document.querySelector('.total-amount h3');
    const services = [
        { name: "Catering", price: 1000 },
        { name: "Video..", price: 1500 },
        { name: "Flower..", price: 500 },
        { name: "DJ..", price: 1200 },
        { name: "Photo..", price: 700 },
        { name: "Ballons", price: 900 },
        { name: "Beaut..", price: 800 },
        { name: "Cakes", price: 2000 }
    ];

    let selectedServices = [];
    let totalAmount = 0;

    addButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const service = services[index];

            // Check if the service is already selected
            if (!selectedServices.some(item => item.name === service.name)) {
                selectedServices.push(service);
                
                // Add service to the list
                const serviceItem = document.createElement('div');
                serviceItem.className = 'service-item';
                serviceItem.innerHTML = `
                    <span>${service.name}</span>
                    <span>$${service.price.toFixed(2)}</span>
                    <button class="remove-btn">Remove</button>
                `;
                selectedServicesList.appendChild(serviceItem);

                // Update total amount
                totalAmount += service.price;
                totalAmountElem.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;

                // Add event listener to the remove button
                serviceItem.querySelector('.remove-btn').addEventListener('click', function () {
                    totalAmount -= service.price;
                    totalAmountElem.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
                    selectedServices = selectedServices.filter(item => item.name !== service.name);
                    serviceItem.remove();
                });
            } else {
                alert('Service already added!');
            }
        });
    });

    document.getElementById('proceed-btn').addEventListener('click', () => {
        localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
        localStorage.setItem('totalAmount', totalAmount);
    });
});

// navbar logic
document.getElementById('hamburger-icon').addEventListener('click', function() {
    var menu = document.querySelector('.navbar-menu');
    
    // Toggle the "show" class to show or hide the menu
    menu.classList.toggle('show');
});