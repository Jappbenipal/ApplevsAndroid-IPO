document.getElementById("phone").addEventListener("click", phoneClicked);

function phoneClicked() {
  document.getElementById("pic").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").href = "'https://www.android.com/'";
  var background = a4c93b;
  document.getElementById("doctype").style.background = background;
  document.getElementById("update").style.fontFamily = "roboto,sans-serif";
}

document.getElementById("iphone").addEventListener("click", iphoneClicked);

function iphoneClicked() {
  document.getElementById("pic").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").href = "'https://www.apple.com/'";
  var background = b6bcca;
  document.getElementById("body").style.background = background;
  document.getElementById("update").style.fontFamily = "Brygada 1918, serif";
}
