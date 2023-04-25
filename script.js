window.onload = function() {
  var gallery = document.getElementById("gallery");
  var numImages = 5;
  var images = [];
  for (var i = 1; i <= numImages; i++) {
    images.push("img" + i + ".jpg");
  }
  for (var i = 0; i < images.length; i++) {
    var img = document.createElement("img");
    img.src = "img/" + images[i];
    gallery.appendChild(img);
  }
};