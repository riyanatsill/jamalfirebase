window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      location.assign("login.html");
    }
  });


  function save_valorant(){
var username = sessionStorage.getItem('username');
var Id = sessionStorage.getItem('Id');
var game = sessionStorage.getItem('game');
var email = sessionStorage.getItem('email');
var price = sessionStorage.getItem('price');
var payment = sessionStorage.getItem('payment');

var textNama = document.getElementById("textNama").value = riotId;
var textEmail = document.getElementById("textEmail").value = email;
var textPrice = document.getElementById("textPrice").value = price;
var textPayment = document.getElementById("textPayment").value = payment;

document.getElementById("submitFormPubgm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (username) {
        var uid = firebase.database().ref().child('Transaction').push().key;

        var data = {
            Id: Id,
            game: game,
            email: email,
            selectedProduct: selectedProduct,
            username: username,
            selectedPayment: selectedPayment
        }

        var updates = {};
        updates['/Transaction/' + uid] = data;
        firebase.database().ref().update(updates);
        console.log('Data stored to Firebase:', data);
        location.assign("success.html");
    } else {
        console.log('User session not found. Please login first.');
    }
})
  }

