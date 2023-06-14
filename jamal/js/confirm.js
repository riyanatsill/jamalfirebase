window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        // Redirect to the login page if not logged in
        location.assign("login.html");
    } else {
        var game = sessionStorage.getItem("game");
        console.log(game);

        switch (game) {
            case "Valorant":
                save_valorant();
                break;
            case "PUBG Mobile":
                save_pubgm();
                break;
            case "Genshin Impact":
                save_genshin();
                break;
            case "Mobile Legend":
                save_ml();
                break;
        }
    }
});

function save_valorant() {
    var username = sessionStorage.getItem('username');
    var riotId = sessionStorage.getItem('riotId');
    var tagline = sessionStorage.getItem('tagline');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var price = sessionStorage.getItem('price');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textTagline = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textPrice = document.getElementById("textPrice");
    var textPayment = document.getElementById("textPayment");

    textNama.value = riotId;
    textTagline.value = tagline;
    textEmail.value = email;
    textPrice.value = price;
    textPayment.value = payment;

    var submitForm = document.getElementById("submitForm");
    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (username) {
            var uid = firebase.database().ref().child('Transaction').push().key;

            var data = {
                Id: riotId,
                tagline: tagline,
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
    });
}

function save_ml() {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "Zone";
    label.setAttribute("placeholder", "Zone");

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var zone = sessionStorage.getItem('zone');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var price = sessionStorage.getItem('price');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textZone = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textPrice = document.getElementById("textPrice");
    var textPayment = document.getElementById("textPayment");

    textNama.value = Id;
    textZone.value = zone;
    textEmail.value = email;
    textPrice.value = price;
    textPayment.value = payment;

    var submitForm = document.getElementById("submitForm");
    submitForm.addEventListener("submit", function(event) {
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
    });
}

function save_pubgm() {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "";
    label.setAttribute("placeholder", "");
    var labelId = document.getElementById("textTagline");
    labelId.style.display = "none";

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var price = sessionStorage.getItem('price');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textEmail = document.getElementById("textEmail");
    var textPrice = document.getElementById("textPrice");
    var textPayment = document.getElementById("textPayment");

    textNama.value = Id;
    textEmail.value = email;
    textPrice.value = price;
    textPayment.value = payment;

    var submitForm = document.getElementById("submitForm");
    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (username) {
            var uid = firebase.database().ref().child('Transaction').push().key;

            var data = {
                Id: Id,
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
    });
}

function save_genshin() {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "Server";
    label.setAttribute("placeholder", "Server");

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var server = sessionStorage.getItem('server');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var price = sessionStorage.getItem('price');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textTagline = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textPrice = document.getElementById("textPrice");
    var textPayment = document.getElementById("textPayment");

    textNama.value = Id;
    textTagline.value = server;
    textEmail.value = email;
    textPrice.value = price;
    textPayment.value = payment;

    var submitForm = document.getElementById("submitForm");
    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (username) {
            var uid = firebase.database().ref().child('Transaction').push().key;

            var data = {
                Id: Id,
                server: server,
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
    });
}