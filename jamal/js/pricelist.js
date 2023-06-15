var tbPricelist = document.getElementById('tb_valo');
var tbPricelist2 = document.getElementById('tb_genshin');
var tbPricelist3 = document.getElementById('tb_pubgm');
var tbPricelist4 = document.getElementById('tb_ml');
var databaseRef = firebase.database().ref('Product/');
var rowIndexvalo = 1;
var rowIndexgenshin = 1;
var rowIndexpubgm = 1;
var rowIndexml = 1;

databaseRef.orderByChild('game_id').equalTo('1').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        var row = tbPricelist.insertRow(rowIndexvalo);
        var Product = row.insertCell(0);
        var Price = row.insertCell(1);

        Product.appendChild(document.createTextNode(childData.product));
        Price.appendChild(document.createTextNode(childData.price)); 
        rowIndexvalo = rowIndexvalo + 1;
    
    });
  });

  databaseRef.orderByChild('game_id').equalTo('4').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        var row = tbPricelist2.insertRow(rowIndexgenshin);
        var Product = row.insertCell(0);
        var Price = row.insertCell(1);

        Product.appendChild(document.createTextNode(childData.product));
        Price.appendChild(document.createTextNode(childData.price)); 
        rowIndexgenshin = rowIndexgenshin + 1;
    
    });
  });

  databaseRef.orderByChild('game_id').equalTo('2').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        var row = tbPricelist3.insertRow(rowIndexpubgm);
        var Product = row.insertCell(0);
        var Price = row.insertCell(1);

        Product.appendChild(document.createTextNode(childData.product));
        Price.appendChild(document.createTextNode(childData.price)); 
        rowIndexpubgm = rowIndexpubgm + 1;
    
    });
  });

  databaseRef.orderByChild('game_id').equalTo('3').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
        var row = tbPricelist4.insertRow(rowIndexml);
        var Product = row.insertCell(0);
        var Price = row.insertCell(1);

        Product.appendChild(document.createTextNode(childData.product));
        Price.appendChild(document.createTextNode(childData.price)); 
        rowIndexml = rowIndexml + 1;
    
    });
  });