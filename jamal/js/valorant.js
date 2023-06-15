const productRadioButtons = document.querySelectorAll('input[name="price"]');
                  
let selectedProductDiv = null;

// Add event listener to each product radio button
productRadioButtons.forEach(function (radio) {
  radio.addEventListener('click', function () {
    // Get the parent div of the radio button
    const div = this.parentElement;

    // Restore the background color of the previously selected product div
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


const paymentRadioButtons = document.querySelectorAll('input[name="payment"]');

let selectedProductDiv2 = null;


paymentRadioButtons.forEach(function (radio) {
  radio.addEventListener('click', function () {

    const div = this.parentElement;

    if (selectedProductDiv2 !== null && selectedProductDiv2 !== div) {
      selectedProductDiv2.style.backgroundColor = '#E8E8E8';
    }

    if (this.checked) {
      selectedProductDiv2 = div; 
      div.style.backgroundColor = 'rgb(139, 192, 253)';
    }
  });
});


var databaseRef = firebase.database().ref('Transaction/');
		
		    document.getElementById('registerForm').addEventListener('submit', function(event) {
		            event.preventDefault(); // Prevent form submission
                    const riotId = document.getElementById('nama').value.trim();
                    const tagline = document.getElementById('uid').value.trim();
                    const email = document.getElementById('gmail').value.trim();

                    
                    const selectedPrice = document.querySelector('input[name="price"]:checked');
                    const selectedPayment = document.querySelector('input[name="payment"]:checked');

                    if (riotId === '' || riotId < 0 || tagline === '' || email === '' || !selectedPrice || !selectedPayment) {
                        
                        alert('Please fill in all the required fields and make a selection for both price and payment.');
                    } else {
                        
                        save_valorant();
                        alert('Successfully');
                        location.assign("details.html");
                    }
		            
		        });
		
		    function save_valorant(){
                var Id = document.getElementById('nama').value;
                var tagline = document.getElementById('uid').value;
                var email = document.getElementById('gmail').value;
                var game = document.getElementById('game').value;
                var selectedProduct = document.querySelector('input[name="price"]:checked').value;
                var selectedPayment = document.querySelector('input[name="payment"]:checked').value;
                var username = sessionStorage.getItem('username');

            
            if (username) {

            sessionStorage.setItem('riotId', Id);
            sessionStorage.setItem('tagline', tagline);
            sessionStorage.setItem('game', game);
            sessionStorage.setItem('email2', email);
            sessionStorage.setItem('product', selectedProduct);
            sessionStorage.setItem('payment', selectedPayment);
            }else {
            console.log('User session not found. Please login first.');
            }
        }

        
      window.addEventListener('load', function() {
        var isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
          location.assign("login.html");
        }
      });