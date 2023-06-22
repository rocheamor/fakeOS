import horoscopeArray from "./horoscope-array.js";

const horoscopePageForm = document.querySelector('.button__close');
horoscopePageForm.addEventListener('click', function() {
  window.location.href = './horoscope.html';
});

// Get the query string from the URL
const queryString = window.location.search;
// Create a URLSearchParams object and pass the query string
const urlParameters = new URLSearchParams(queryString);
const nameSelected = urlParameters.get('name');
const birthdaySelected = urlParameters.get('birthday');
const nameParagraph = document.getElementById('nameParagraph');
const readingParagraph = document.getElementById('readingParagraph');

const findZodiacSign = (date) => {
  const inputDate = new Date(date);

  const filteredSigns = horoscopeArray.filter(horoscopeObj => {
    const startDate = new Date(horoscopeObj.startDate);
    const endDate = new Date(horoscopeObj.endDate);

    return inputDate >= startDate && inputDate <= endDate;
  });

  if (filteredSigns.length > 0) {
    return filteredSigns[0]; // Return the first matching zodiac sign
  }
  return null;
}


const zodiacSign = findZodiacSign(birthdaySelected);

if (zodiacSign) { 
  nameParagraph.textContent = `Hi ${nameSelected}, your zodiac sign is ${zodiacSign.sign}.`;
  readingParagraph.textContent = zodiacSign.reading;
} else {
  nameParagraph.textContent = `Hi ${nameSelected}, please enter a valid date.`;
}