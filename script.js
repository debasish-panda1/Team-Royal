let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};

// Request permission to send notifications
function requestNotificationPermission() {
    if (Notification.permission === "default") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
  }
document.getElementById('execute-search').addEventListener('click', function() {
  const vendorType = document.getElementById('vendor-selection').value;
  const city = document.getElementById('location').value;

  // Example demo data
  const demoData = {
      'Wedding Venues': {
          'Rayagada': [
              { name: 'Palace Hotel', description: 'Elegant palace for grand weddings', price: 'Rs.50,000 onwards' }
          ],
          'Bhubaneswar': [
              { name: 'Sitaram Resort', description: 'Luxurious resort with all amenities', price: 'Rs.70,000 onwards' }
          ]
      },
      'Anniversary': {
          'Cuttack': [
              { name: 'Anniversary Hall', description: 'Perfect for anniversary parties', price: 'Rs.20,000 onwards' }
          ]
      },
      'Birthday': {
          'Jajpur': [
              { name: 'Birthday Palace', description: 'Ideal for birthday celebrations', price: 'Rs.25,000 onwards' }
          ]
      },
      'Professional Party': {
          'Rourkela': [
              { name: 'Corporate Center', description: 'Suitable for professional events', price: 'Rs.40,000 onwards' }
          ]
      },
      'Meetups': {
          'Rayagada': [
              { name: 'Meetup Hall', description: 'Great space for meetups', price: 'Rs.15,000 onwards' }
          ]
      }
  };

  let resultsHTML = '';
  if (vendorType in demoData && city in demoData[vendorType]) {
      demoData[vendorType][city].forEach(item => {
          resultsHTML += `
              <div id="search-output" class="result-item">
                  <h2>${item.name}</h2>
                  <p>${item.description}</p>
                  <h3>${item.price}</h3>
              </div>
          `;
      });
  } else {
      resultsHTML = '<p id="doubtresult">No results found for your criteria.</p>';
  }

  const resultContainer = document.getElementById('result-container');
  resultContainer.querySelector('#results-content').innerHTML = resultsHTML;
  resultContainer.style.display = 'block';
  
  // Show the Go Back button and hide the Search button
  document.getElementById('go-back').style.display = 'inline-block';
  document.getElementById('execute-search').style.display = 'none';
});

document.getElementById('go-back').addEventListener('click', function() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'none';
  
  // Hide the Go Back button and show the Search button again
  document.getElementById('execute-search').style.display = 'inline-block';
  document.getElementById('go-back').style.display = 'none';
});
