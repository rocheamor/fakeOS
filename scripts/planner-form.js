const plannerHomePage = document.querySelector('.button__close');

plannerHomePage.addEventListener('click', function() {
  window.location.href = './planner.html';
});



const addPlanBtn = document.querySelector('#addPlan');
const form = document.querySelector('.planner-form')


addPlanBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const monthInput = document.querySelector('#monthList').value;
  const dayInput = document.querySelector('#day').value;
  const taskInput = document.querySelector('#task').value;

  const plannerObject = {month: monthInput , day: dayInput , task: taskInput};

  let monthlyPlan = [];

  if(window.sessionStorage.getItem("monthlyPlanner")) {
    monthlyPlan = JSON.parse(window.sessionStorage.getItem("monthlyPlanner"))
  }

  monthlyPlan.push(plannerObject);
  window.sessionStorage.setItem("monthlyPlanner", JSON.stringify(monthlyPlan));

  form.reset();
});



