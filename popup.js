
document.getElementById('generate').addEventListener('click', generate);
document.getElementById('save').addEventListener('click', savetofile);
document.getElementById('copy').addEventListener('click', copyClipboard);

function generate() {

  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHILJKLMNOPQRSTUVWXYZ';
  var num = '1234567890';
  var symbols = '!@#$%^&*()+-=[]';

  var ifupper = document.getElementById("upper");
  var iflower = document.getElementById("lower");
  var ifnumber = document.getElementById("num");
  var ifsymbol = document.getElementById("symbol");

  var passwordl = document.getElementById("passwordl").value;
  var password_for = document.getElementById("password_for").value;
  var password = "";
  var random = "";

  if (ifupper.checked == true) {
    for (var i = 0; i <= uppercase.length; i++) {
      random += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
  }

  if (iflower.checked == true) {
    for (var i = 0; i <= lowercase.length; i++) {
      random += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
  }

  if (ifnumber.checked == true) {
    for (var i = 0; i <= num.length; i++) {
      random += num.charAt(Math.floor(Math.random() * num.length));
    }
  }

  if (ifsymbol.checked == true) {
    for (var i = 0; i <= symbols.length; i++) {
      random += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
  }

  for (var i = 0; i < passwordl; i++) {
    password += random.charAt(Math.floor(Math.random() * random.length));
  }


  document.getElementById("password").value = password;

}

function savetofile() {
  var password_for = document.getElementById("password_for").value;
  var password = document.getElementById("password").value;

  var blob = new Blob(["Your password for " + password_for + " is: " + password], {type: "text/plain;charset=utf-8"});
  saveAs(blob, password_for);
}

function copyClipboard() {

  var password_for = document.getElementById("password_for").value;
  var password = document.getElementById("password").value;

  document.getElementById('password').select();

  document.execCommand("Copy");

  alert("Your password for " + password_for + " has been successfully copied to the clipboard");
}
