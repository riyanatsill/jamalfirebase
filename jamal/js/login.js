var databaseRef = firebase.database().ref('User/');
  
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = document.querySelector('input[name="username"]').value;
      var password = document.querySelector('input[name="password"]').value;
  
      if (!username || !password) {
      // Display an error message to the user if any field is empty
      alert('Please fill in both the username and password fields.');
      return;
    }

      databaseRef.orderByChild('username').equalTo(username).once('value', function(snapshot) {
        var found = false;
        snapshot.forEach(function(childSnapshot) {
          var data = childSnapshot.val();
          if (data.pass === password) {
            // Successful login
            found = true;

            // Retrieve the user's email from Firebase
            var email = data.email;

            // Create a session using sessionStorage
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('isLoggedIn', 'true');
          alert('Login successfully!');
            // Redirect to the next page
            location.assign("home.html");
          }
        });
  
        if (!found) {
          // Incorrect email or password
          alert('incorrect Email or Password');
          console.log('Incorrect email or password');
          // Display an error message to the user
        }
      });
    });