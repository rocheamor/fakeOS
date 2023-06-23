//create a function that would show real time on the fakeOS homepage
const updateTime = () => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
};
//time shows updates every one second interval
setInterval(updateTime, 1000);

//navigate to gallery app homepage after clicking the gallery icon
const galleryPage = document.getElementById('gallery');
galleryPage.addEventListener('click', function() {
  window.location.href = './gallery.html';
});

//navigate to horoscope app homepage after clicking the horoscope icon
const horoscopePage = document.getElementById('horoscope');
horoscopePage.addEventListener('click', function() {
  window.location.href = './horoscope.html';
});

//navigate to planner app homepage after clicking the planner icon
const plannerPage = document.getElementById('planner');
plannerPage.addEventListener('click', function() {
  window.location.href = './planner.html';
});

