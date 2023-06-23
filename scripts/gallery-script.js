//navigate back to fakeOS homepage after clicking the close button
const homePage = document.getElementById('closeButton');
homePage.addEventListener('click', function() {
  window.location.href = './fakeOS.html';
});

//create an array of gallery images using the image names
const galleryImages = ["flower1.jpg", "flower2.jpg", "flower3.jpg" , "flower4.jpg", "flower5.jpg", "flower6.jpg", "flower7.jpeg", "flower8.jpg", "flower9.jpg", "flower10.jpg", "flower11.jpg", "flower12.jpg", "flower13.jpg", "flower14.png", "flower15.jpg"]



const gallery = document.querySelector(".images");
//loop through the galleryImages array to create an <img> element and append the images inside the element
//also create an <a> element to which the href will be anchored to, in order for the images to be clickable

for(let i = 0; i < galleryImages.length; i++) {

    const imgElement = document.createElement('img');   
    imgElement.src = './assets/gallery-images/' + galleryImages[i];     
    const anchorElement = document.createElement('a');  
    anchorElement.href = './image.html?imageName='+ galleryImages[i];
    anchorElement.appendChild(imgElement);
    gallery.appendChild(anchorElement);
}