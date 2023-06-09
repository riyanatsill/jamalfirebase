var price = ["vpx", "vps", "vpy", "vpz", "vpz1", "vpx1", "vpy1", "vps1"]
var paymentMethod = ["bcaa", "gopayy","ovo","sp","mandiri","dana"]

function changeBackground(type, object) {
  let loop = []
  let value = object.id
  console.log(value)
  console.log(type)

  if (type === "price") {
      loop = price
  } else {
      loop = paymentMethod
  }

  console.log(loop)
  loop.forEach(element => {
      if (element !== value) {
          if (type === "price") {
              document.getElementById(element).style.backgroundColor = "#E8E8E8";
          } else {
              document.getElementById(element).style.backgroundColor = "#E8E8E8";
          }
      } else {
          let current_bg = document.getElementById(element).style.backgroundColor;
          console.log(current_bg)
          if (current_bg == "rgb(139, 192, 253)") {
              document.getElementById(element).style.backgroundColor = "#E8E8E8";
          } else {
              document.getElementById(element).style.backgroundColor = "rgb(139, 192, 253)";
          }
      }
  })
}






function sbmt() {
    let uname = document.getElementById("nama").value;
    console.log(uname.length);
  
    let userid = document.getElementById("uid").value;
    console.log(userid.length);

    try {
      if (uname.trim().length === 0 || userid.trim().length === 0 || userid <= 0) {
        alert("Please Insert Your Data Correctly");
      } else {
        let hasSelectedItem = false;
        let pilihan = document.getElementsByClassName("border-pilihan");
        for (i = 0; i < pilihan.length; i++) {
          if (pilihan[i].style.backgroundColor === "rgb(139, 192, 253)") {
            hasSelectedItem = true;
            break;
          }
        }
        if (hasSelectedItem) {
          Payment();
        } else {
          alert("Choose Your Item");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function sbmt2() {
  
    let userid = document.getElementById("uid").value;
    console.log(userid.length);

    try {
      if (userid.trim().length === 0 || userid <= 0) {
        alert("Please Insert Your Data Correctly");
      } else {
        let hasSelectedItem = false;
        let pilihan = document.getElementsByClassName("border-pilihan");
        for (i = 0; i < pilihan.length; i++) {
          if (pilihan[i].style.backgroundColor === "rgb(139, 192, 253)") {
            hasSelectedItem = true;
            break;
          }
        }
        if (hasSelectedItem) {
          Payment();
        } else {
          alert("Choose Your Item");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  function sbmt3() {
    let uname = document.getElementById("nama").value;
    console.log(uname.length);
  
    let userid = document.getElementById("uid").value;
    console.log(userid.length);

    try {
      if (uname.trim().length === 0 || userid.trim().length === 0 || userid <= 0 || uname <= 0) {
        alert("Please Insert Your Data Correctly");
      } else {
        let hasSelectedItem = false;
        let pilihan = document.getElementsByClassName("border-pilihan");
        for (i = 0; i < pilihan.length; i++) {
          if (pilihan[i].style.backgroundColor === "rgb(139, 192, 253)") {
            hasSelectedItem = true;
            break;
          }
        }
        if (hasSelectedItem) {
          Payment();
        } else {
          alert("Choose Your Item");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  function Payment() {
    let hasSelectedPayment = false;
    let pilihan2 = document.getElementsByClassName("wkwk");
    let gmail = document.getElementById("gmail").value;
    for (x = 0; x < pilihan2.length; x++) {
      if (pilihan2[x].style.backgroundColor === "rgb(139, 192, 253)") {
        hasSelectedPayment = true;
        break;
      }
    }
    if (hasSelectedPayment) {
        if(gmail.includes("@gmail.com")){
            location.assign("success.html");
        }else{
            alert("Please input your email");
        }
    } else {
      alert("Choose Your Payment");
    }
  }
  