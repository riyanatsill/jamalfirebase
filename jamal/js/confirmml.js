window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        // Redirect to the login page if not logged in
        location.assign("login.html");
    }
});

function save_valorant(){
var username = sessionStorage.getItem('username');
var Id = sessionStorage.getItem('Id');
var zone = sessionStorage.getItem('zone');
var game = sessionStorage.getItem('game');
var email = sessionStorage.getItem('email');
var price = sessionStorage.getItem('price');
var payment = sessionStorage.getItem('payment');

var textNama = document.getElementById("textNama").value = Id;
var textZone = document.getElementById("textTagline").value = zone;
var textEmail = document.getElementById("textEmail").value = email;
var textPrice = document.getElementById("textPrice").value = price;
var textPayment = document.getElementById("textPayment").value = payment;

var databaseRef = firebase.database().ref('Transaction/');
document.getElementById("sumbitForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (username) {
        var uid = firebase.database().ref().child('Transaction').push().key;

        var data = {
            Id: Id,
            zone: zone,
            game: game,
            email: email,
            selectedProduct: price,
            username: username,
            selectedPayment: payment
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