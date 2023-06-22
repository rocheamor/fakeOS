let galleryImages = ["flower1.jpg", "flower2.jpg", "flower3.jpg" , "flower4.jpg", "flower5.jpg", "flower6.jpg", "flower7.jpeg", "flower8.jpg", "flower9.jpg", "flower10.jpg", "flower11.jpg", "flower12.jpg", "flower13.jpg", "flower14.png", "flower15.jpg"]


const gallery = document.querySelector(".images");

for(let i = 0; i < galleryImages.length; i++) {

    const imgElement = document.createElement('img');   
    imgElement.src = './assets/gallery-images/' + galleryImages[i];     
    const anchorElement = document.createElement('a');  
    anchorElement.href = './image.html?imageName='+ galleryImages[i];
    anchorElement.appendChild(imgElement);
    gallery.appendChild(anchorElement);
}

const homePage = document.getElementById('closeButton');

homePage.addEventListener('click', function() {
  window.location.href = './fakeOS.html';
});