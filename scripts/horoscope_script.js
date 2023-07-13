import toNavigatePage from "./navigation-codes.js";

//navigate back to fakeOS homepage after clicking the close button
toNavigatePage('closeButton', './index.html')

//create a function to submit horoscope, extracting the name and birthday inputs, passing them as parameters for the query string in the horoscope-reading page to display the necessary information about the horoscope reading of the user

const submitHoroscopeForm = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const birthday = document.getElementById("birthday").value;
  window.location.href = `./horoscope-reading.html?name=${nameInput}&birthday=${birthday}`;

  appendNameInput(nameInput);
}

const horoscopeForm = document.querySelector('.form');
horoscopeForm.addEventListener("submit", (submitHoroscopeForm));
