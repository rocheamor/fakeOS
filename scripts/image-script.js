import galleryImages from "./gallery-array.js";
import toNavigatePage from "./navigation-codes.js";

//navigate back to gallery homepage after clicking the close button
toNavigatePage('closeButton', './gallery.html');

//To view the images from the gallery one at a time using the arrows
// Get the query string from the URL
const queryString = window.location.search;
// Create a URLSearchParams object and pass the query string
const params = new URLSearchParams(queryString);
// Get the value of the 'imageName' parameter to be appended to the <img> element
const imageName = params.get('imageName');
const galleryImage = document.querySelector(".image");
const imgElement = document.createElement('img');   
imgElement.src = './assets/gallery-images/' + imageName;        
galleryImage.appendChild(imgElement);

//identify the index of the image the user clicks on
let currentIndex = galleryImages.indexOf(imageName);

const arrowNext = document.getElementById('arrowNext');
const arrowBack = document.getElementById('arrowBack');

arrowNext.addEventListener('click', function() {
  //increment index by 1 to view the next image; if current image is the last image, go back to the first image
    currentIndex++;
    if (currentIndex === galleryImages.length) {
        currentIndex = 0;
    }
    imgElement.src = './assets/gallery-images/' + galleryImages[currentIndex];
});

arrowBack.addEventListener('click', function() {
   //decrement index by 1 to view the previous image; if current image is the first image, go back to the last image
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = galleryImages.length - 1;
    }
    imgElement.src = './assets/gallery-images/' + galleryImages[currentIndex];
  });