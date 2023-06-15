    // Get a reference to the password update form
    var passwordUpdateForm = document.getElementById('password-update-form');
    
    // Attach an event listener to the form submission
    passwordUpdateForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from being submitted
    
      // Get the new password value from the input field
      var newPassword = document.getElementById('newPasswordInput').value;
      
      if (!newPassword) {
            // Display an error message to the user if any field is empty
            alert('Please fill in all the required fields.');
            return;
            }

      if (newPassword.length < 5) {
            alert('Password should be a minimum of 5 characters.');
            return;
            }

      // Get the user's email and username from session storage
      var userUsername = sessionStorage.getItem('username');
    
      firebase.database().ref('User/').orderByChild('username').equalTo(userUsername).once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var userId = childSnapshot.key;

          // Update the user's password in the Firebase Realtime Database
          firebase.database().ref('User/' + userId).update({
              pass: newPassword
            }).then(function() {
              var confirmed = confirm('Are you sure want to change the password?');
            // Check if the user confirmed the logout
            if (confirmed) {
              sessionStorage.clear();
              // Redirect to the login page
              location.assign("login.html");
            }
            }).catch(function(error) {
              // Handle any errors that occur during the password update
              console.error('Error updating password:', error);
              // You can show an error message to the user or perform any other error handling here
            });
        });
      });
  });
    
    // Retrieve user's email and username from session storage
    var userEmail = sessionStorage.getItem('email');
    var userUsername = sessionStorage.getItem('username');
    if (userEmail && userUsername) {
      // Populate the email and username input fields
      document.getElementById('floatingInput').setAttribute('value', userEmail);
      document.getElementById('username').setAttribute('value', userUsername);
    } else {
      // Session data not available
      console.log('Session data not available');
    }