import galleryImages from "./gallery-array.js";
import toNavigatePage from "./navigation-codes.js";

//navigate back to fakeOS homepage after clicking the close button
toNavigatePage('closeButton', './fakeOS.html');


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