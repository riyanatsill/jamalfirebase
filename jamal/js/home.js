function logout() {
  var confirmed = confirm('Are you sure you want to logout?');
  
  if (confirmed) {
    sessionStorage.clear();
    location.assign("login.html");
  }
  }

  window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      location.assign("login.html");
    }
  });