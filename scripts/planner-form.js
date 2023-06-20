const plannerHomePage = document.querySelector('.button__close');

plannerHomePage.addEventListener('click', function() {
  window.location.href = './planner.html';
});



const monthlyPlanner = [{month: 1, day: 19, task: "Go to the doctor"}, {month: 2, day: 29, task: "See the GP"}];