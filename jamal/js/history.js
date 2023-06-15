function check_login(){
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            var username = sessionStorage.getItem('username');
            return username;
            }
            return null;
}

var username = check_login();

if (username) {
var tbHistory = document.getElementById('tb_history');
var databaseRef = firebase.database().ref('Transaction/');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    
    // Check if the current transaction belongs to the logged-in user
    if (childData.username === username) {
      var row = tbHistory.insertRow(rowIndex);
      var uid = row.insertCell(0);
      var cellGame = row.insertCell(1);
      var cellId = row.insertCell(2);
      var cellProduct = row.insertCell(3);
      var cellPayment = row.insertCell(4);

      uid.classList.add("hidden");
      uid.appendChild(document.createTextNode(childKey));
      cellGame.appendChild(document.createTextNode(childData.game));
      cellId.appendChild(document.createTextNode(childData.Id));
      cellProduct.appendChild(document.createTextNode(childData.product));
      cellPayment.appendChild(document.createTextNode(childData.payment));
      
      // Create a delete button element
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";

      // Assign a click event handler to the delete button
      deleteButton.addEventListener("click", function() {
      var confirmation = confirm("Are you sure you want to delete this transaction?"); // Display a confirmation dialog

      if (confirmation) {
      deleteTransaction(childKey); // Call a function to delete the transaction with the given childKey
      }
      });

      // Append the delete button to the row as the last cell
      var deleteCell = row.insertCell(5);
      deleteCell.appendChild(deleteButton);

      rowIndex = rowIndex + 1;
    }
  });
});
} else {
// Handle the case when the user is not logged in or authenticated
}
// Check if the user is logged in when the page loads
window.addEventListener('load', function() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      // Redirect to the login page if not logged in
      location.assign("login.html");
    }
  });

  function deleteTransaction(childKey) {
// Replace '/Transaction/' with the appropriate reference to your Firebase transaction node
firebase.database().ref('Transaction/' + childKey).remove()
  .then(function() {
    alert('Transaction deleted successfully!');
    location.reload(); // Reload the page after deletion
  })
  .catch(function(error) {
  });
}