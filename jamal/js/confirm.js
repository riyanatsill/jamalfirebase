window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        location.assign("login.html");
        
    } else {
        var game = sessionStorage.getItem("game");
        var product = sessionStorage.getItem('product');
        var databaseRef = firebase.database().ref('Product');
        databaseRef.orderByChild('product').equalTo(product).once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var data = childSnapshot.val();
              if(data.product === product){
                var getPrice = data.price;
                found = true;
                switch (game) {
                    case "Valorant":
                        save_valorant(getPrice);
                        break;
                    case "PUBG Mobile":
                        save_pubgm(getPrice);
                        break;
                    case "Genshin Impact":
                        save_genshin(getPrice);
                        break;
                    case "Mobile Legend":
                        save_ml(getPrice);
                        break;
                }
              }
            });
          });        
    }
});

var databaseRef = firebase.database().ref('Transaction/');
function save_valorant(price) {
    var username = sessionStorage.getItem('username');
    var riotId = sessionStorage.getItem('riotId');
    var tagline = sessionStorage.getItem('tagline');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email2');
    var product = sessionStorage.getItem('product');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textPrice = document.getElementById("textHarga");
    var textTagline = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textProduct = document.getElementById("textProduct");
    var textPayment = document.getElementById("textPayment");

    textNama.value = riotId;
    textPrice.value = price;
    textTagline.value = tagline;
    textEmail.value = email;
    textProduct.value = product;
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
                product: product,
                username: username,
                payment: payment
            }

            var updates = {};
            updates['/Transaction/' + uid] = data;
            firebase.database().ref().update(updates);
            alert('Successfully');
            location.assign("success.html");
        } else {
            console.log('User session not found. Please login first.');
        }
    });
}

function save_ml(price) {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "Zone";
    label.setAttribute("placeholder", "Zone");

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var zone = sessionStorage.getItem('zone');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var product = sessionStorage.getItem('product');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textZone = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textProduct = document.getElementById("textProduct");
    var textPayment = document.getElementById("textPayment");
    var textPrice = document.getElementById("textHarga");

    textNama.value = Id;
    textPrice.value = price;
    textZone.value = zone;
    textEmail.value = email;
    textProduct.value = product;
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
                product: product,
                username: username,
                payment: payment
            }

            var updates = {};
            updates['/Transaction/' + uid] = data;
            firebase.database().ref().update(updates);
            alert('Successfully');
            location.assign("success.html");
        } else {
            console.log('User session not found. Please login first.');
        }
    });
}

function save_pubgm(price) {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "";
    label.setAttribute("placeholder", "");
    var labelId = document.getElementById("textTagline");
    labelId.style.display = "none";

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var product = sessionStorage.getItem('product');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textEmail = document.getElementById("textEmail");
    var textProduct = document.getElementById("textProduct");
    var textPayment = document.getElementById("textPayment");
    var textPrice = document.getElementById("textHarga");


    textNama.value = Id;
    textProduct.value = product;
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
                product: product,
                username: username,
                payment: payment
            }

            var updates = {};
            updates['/Transaction/' + uid] = data;
            firebase.database().ref().update(updates);
            alert('Successfully');
            location.assign("success.html");
        } else {
            console.log('User session not found. Please login first.');
        }
    });
}

function save_genshin(price) {
    var label = document.querySelector('label[for="textTagline"]');
    label.textContent = "Server";
    label.setAttribute("placeholder", "Server");

    var username = sessionStorage.getItem('username');
    var Id = sessionStorage.getItem('Id');
    var server = sessionStorage.getItem('server');
    var game = sessionStorage.getItem('game');
    var email = sessionStorage.getItem('email');
    var product = sessionStorage.getItem('product');
    var payment = sessionStorage.getItem('payment');

    var textNama = document.getElementById("textNama");
    var textTagline = document.getElementById("textTagline");
    var textEmail = document.getElementById("textEmail");
    var textProduct = document.getElementById("textProduct");
    var textPrice = document.getElementById("textHarga");
    var textPayment = document.getElementById("textPayment");

    textNama.value = Id;
    textProduct.value = product;
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
                product: product,
                username: username,
                payment: payment
            }

            var updates = {};
            updates['/Transaction/' + uid] = data;
            firebase.database().ref().update(updates);
            alert('Successfully');
            location.assign("success.html");
        } else {
            console.log('User session not found. Please login first.');
        }
    });
}