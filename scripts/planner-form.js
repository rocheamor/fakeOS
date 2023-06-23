//navigate back to planner homepage after clicking the close button
const plannerHomePage = document.querySelector('.button__close');
plannerHomePage.addEventListener('click', function() {
  window.location.href = './planner.html';
});



const form = document.querySelector('.planner-form')

//create a function that would submit plan and push plan to local storage which will then be retrieved in order to display task to the planner homepage
const submitPlan = (event) => {
  event.preventDefault();

  const monthInput = document.querySelector('#monthList').value;
  const dayInput = document.querySelector('#day').value;
  const taskInput = document.querySelector('#task').value;

  const plannerObject = {month: monthInput , day: dayInput , task: taskInput};

  let monthlyPlan = [];

  if(window.localStorage.getItem("monthlyPlanner")) {
    monthlyPlan = JSON.parse(window.localStorage.getItem("monthlyPlanner"))
  }

  monthlyPlan.push(plannerObject);
  window.localStorage.setItem("monthlyPlanner", JSON.stringify(monthlyPlan));

  form.reset();
};

form.addEventListener("submit", (submitPlan));



