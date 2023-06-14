// Get all the radio buttons for products
const productRadioButtons = document.querySelectorAll('input[name="price"]');
                  
let selectedProductDiv = null; // Keep track of the selected product div

// Add event listener to each product radio button
productRadioButtons.forEach(function (radio) {
  radio.addEventListener('click', function () {
    // Get the parent div of the radio button
    const div = this.parentElement;

    // Restore the background color of the previously selected product div, if any
    if (selectedProductDiv !== null && selectedProductDiv !== div) {
      selectedProductDiv.style.backgroundColor = '#E8E8E8';
    }

    // Change the background color of the current product div
    if (this.checked) {
      selectedProductDiv = div; // Store the current product div as the selected div
      div.style.backgroundColor = 'rgb(139, 192, 253)'; // Change the color to your desired value
    }
  });
});

// Get all the radio buttons for products
const paymentRadioButtons = document.querySelectorAll('input[name="payment"]');

let selectedProductDiv2 = null; // Keep track of the selected product div

// Add event listener to each product radio button
paymentRadioButtons.forEach(function (radio) {
  radio.addEventListener('click', function () {
    // Get the parent div of the radio button
    const div = this.parentElement;

    // Restore the background color of the previously selected product div, if any
    if (selectedProductDiv2 !== null && selectedProductDiv2 !== div) {
      selectedProductDiv2.style.backgroundColor = '#E8E8E8';
    }

    // Change the background color of the current product div
    if (this.checked) {
      selectedProductDiv2 = div; // Store the current product div as the selected div
      div.style.backgroundColor = 'rgb(139, 192, 253)'; // Change the color to your desired value
    }
  });
});

j
var databaseRef = firebase.database().ref('Transaction/');
		    let fix = "false";
		
		    document.getElementById('genshinForm').addEventListener('submit', function(event) {
		            event.preventDefault(); // Prevent form submission
                    const genshinId = document.getElementById('uid').value.trim();
                    const server = document.getElementById('nama').value.trim();
                    const email = document.getElementById('gmail').value.trim();

                    // Retrieve selected radio button values
                    const selectedPrice = document.querySelector('input[name="price"]:checked');
                    const selectedPayment = document.querySelector('input[name="payment"]:checked');

                    if (genshinId === '' || server === '' || email === '' || !selectedPrice || !selectedPayment) {
                        // If any of the required fields or radio buttons are empty, display an error message
                        alert('Please fill in all the required fields and make a selection for both price and payment.');
                    } else {
                        // Call the save_valorant() function
                        save_genshin();

                        // Redirect to the next page
                        alert('Successfully');
                        location.assign("success.html");
                    }
		        });
		
		    function save_genshin(){
                var genshinId = document.getElementById('uid').value;
                var server = document.getElementById('nama').value;
                var email = document.getElementById('gmail').value;
                var game = document.getElementById('game').value;
                var selectedProduct = document.querySelector('input[name="price"]:checked').value;
                var selectedPayment = document.querySelector('input[name="payment"]:checked').value;
                var username = sessionStorage.getItem('username');

            
            var uid = firebase.database().ref().child('Transaction').push().key;
            
            var data = {
                genshinId: genshinId,
                server: server,
                game: game,
                email: email,
                selectedProduct: selectedProduct,
                selectedPayment: selectedPayment,
                username: username
            }
            
            var updates = {};
            updates['/Transaction/' + uid] = data;
            firebase.database().ref().update(updates);
            }

            // Check if the user is logged in when the page loads
      window.addEventListener('load', function() {
        var isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
          // Redirect to the login page if not logged in
          location.assign("login.html");
        }
      });