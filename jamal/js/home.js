// Logout functionality
function logout() {
  var confirmed = confirm('Are you sure you want to logout?');
  
  // Check if the user confirmed the logout
  if (confirmed) {
    // Clear the session storage
    sessionStorage.clear();
    // Redirect to the login page
    location.assign("login.html");
  }
  }

  // Check if the user is logged in when the page loads
  window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      // Redirect to the login page if not logged in
      location.assign("login.html");
    }
  });