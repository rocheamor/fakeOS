import toNavigatePage from "./navigation-codes.js";

//create a function that would show real time on the fakeOS homepage
const updateTime = () => {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
};
//time shows updates every one second interval
setInterval(updateTime, 1000);

//navigate to phone apps pages
toNavigatePage('gallery', './gallery.html');
toNavigatePage('horoscope', './horoscope.html');
toNavigatePage('planner', './planner.html');


