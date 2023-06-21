// Get the query string from the URL
const queryString = window.location.search;
// Create a URLSearchParams object and pass the query string
const params = new URLSearchParams(queryString);
// Get the value of the 'imageName' parameter
const imageName = params.get('imageName');
const galleryImage = document.querySelector(".image");
console.log(imageName);
const imgElement = document.createElement('img');   
imgElement.src = './assets/' + imageName;        
galleryImage.appendChild(imgElement);

let galleryImages = ["flower1.jpg", "flower2.jpg", "flower3.jpg" , "flower4.jpg", "flower5.jpg", "flower6.jpg", "flower7.jpeg", "flower8.jpg", "flower9.jpg", "flower10.jpg", "flower11.jpg", "flower12.jpg", "flower13.jpg", "flower14.png", "flower15.jpg"]

let currentIndex = galleryImages.indexOf(imageName);
if (currentIndex === -1) {
  currentIndex = 0; // If the current image is not found in the array, set index to 0
}
const arrowNext = document.getElementById('arrowNext');
const arrowBack = document.getElementById('arrowBack');

// Add click event listener to the forward button
arrowNext.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex == galleryImages.length) {
        currentIndex = 0;
    }
    imgElement.src = './assets/' + galleryImages[currentIndex];
});


arrowBack.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = galleryImages.length - 1;
    }
    imgElement.src = './assets/' + galleryImages[currentIndex];
  });


const galleryPage = document.getElementById('closeButton');

galleryPage.addEventListener('click', function() {
  window.location.href = './gallery.html';
});