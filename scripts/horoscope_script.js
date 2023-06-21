const homePage = document.querySelector('.button__close');
homePage.addEventListener('click', function() {
  window.location.href = './fakeOS.html';
});






const horoscopeForm = document.querySelector('.form');

const submitHoroscopeForm = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;
  const birthday = document.getElementById("birthday").value;
  window.location.href = `./horoscope-reading.html?name=${nameInput}&birthday=${birthday}`;

  appendNameInput(nameInput);
}

horoscopeForm.addEventListener("submit", (submitHoroscopeForm));