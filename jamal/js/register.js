var databaseRef = firebase.database().ref('User/');
let fix = "false";

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('floatingInput').value;
    var username = document.getElementById('floatingInput2').value;
    var password = document.getElementById('floatingPassword').value;

    if (!email || !username || !password) {
        // Display an error message to the user if any field is empty
        alert('Please fill in all the required fields.');
        return;
    }

    // Check if the username or email already exists in the database
    databaseRef.once('value').then(function(snapshot) {
        var users = snapshot.val();
        var usernameExists = false;
        var emailExists = false;

        // Iterate through the users in the database
        for (var key in users) {
            if (users.hasOwnProperty(key)) {
                var user = users[key];
                if (user.username === username) {
                    usernameExists = true;
                    break;
                }
                if (user.email === email) {
                    emailExists = true;
                    break;
                }
            }
        }

        if (usernameExists) {
            alert('Username already exists. Please choose a different username.');
        } else if (emailExists) {
            alert('Email already exists. Please use a different email.');
        } else {
            var confirmed = confirm('Are you sure the data is correct?');

            // Check if the user confirmed the logout
            if (confirmed) {
                // Clear the session storage
                save_valorant();
                // Redirect to the login page
                location.assign("login.html");
            }
        }
    });
});

function save_valorant() {
    var email = document.getElementById('floatingInput').value;
    var username = document.getElementById('floatingInput2').value;
    var pass = document.getElementById('floatingPassword').value;

    var uid = firebase.database().ref().child('User').push().key;

    var data = {
        email: email,
        username: username,
        pass: pass
    }

    var updates = {};
    updates['/User/' + uid] = data;
    firebase.database().ref().update(updates);
}
