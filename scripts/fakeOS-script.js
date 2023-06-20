const updateTime = () => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
};

setInterval(updateTime, 1000);


const galleryPage = document.getElementById('gallery');
galleryPage.addEventListener('click', function() {
  window.location.href = './gallery.html';
});


const horoscopePage = document.getElementById('horoscope');
horoscopePage.addEventListener('click', function() {
  window.location.href = './horoscope.html';
});

const plannerPage = document.getElementById('planner');
plannerPage.addEventListener('click', function() {
  window.location.href = './planner.html';
});

