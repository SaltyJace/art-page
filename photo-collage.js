// Path to the image folder
var imgFolder = "img/";

// Get a reference to the collage div
var collage = document.getElementById("collage");

// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set up the request
xhr.open("GET", imgFolder);

// Define the response type
xhr.responseType = "document";

// When the response is loaded
xhr.onload = function() {
  // Get all image links from the response
  var links = xhr.response.getElementsByTagName("a");

  // Loop through each link
  for (var i = 0; i < links.length; i++) {
    // Get the href attribute
    var href = links[i].getAttribute("href");

    // If it's an image file
    if (/\.(jpe?g|png|gif)$/i.test(href)) {
      // Create a new image element
      var img = document.createElement("img");

      // Set the src attribute to the file path
      img.src = imgFolder + href;

      // Add the image to the collage
      collage.appendChild(img);
    }
  }
};

// Send the request
xhr.send();