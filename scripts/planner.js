//navigate to planner-form page after clicking the + button
const plannerFormPage = document.querySelector('.navbar__add-button');
plannerFormPage.addEventListener('click', function() {
  window.location.href = './planner-form.html';
});

//navigate back to fakeOS homepage after clicking the close button
const homePage = document.querySelector('.navbar__close-button');
homePage.addEventListener('click', function() {
  window.location.href = './fakeOS.html';
});


//collapsible list of plan section
let taskList = document.getElementsByClassName("month");
let i;
for (i = 0; i < taskList.length; i++) {
  taskList[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content && content.classList.contains("task-list")) {
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    }
  })
};

//selected months html in order to display/append plan after user adds plan in the planner-form page, depending on the months selected
const january = document.querySelector('#january');
const february = document.querySelector('#february');
const march = document.querySelector('#march');
const april = document.querySelector('#april');
const may = document.querySelector('#may');
const june = document.querySelector('#june');
const july = document.querySelector('#july');
const august = document.querySelector('#august');
const september = document.querySelector('#september');
const october = document.querySelector('#october');
const november = document.querySelector('#november');
const december = document.querySelector('#december');


//used localStorage instead of sessionStorage to store/save plan information even after closing the browser
const plannerString = localStorage.getItem('monthlyPlanner');
console.log(plannerString, "planner string");
let monthlyPlanner = [];
monthlyPlanner = JSON.parse(plannerString); //parse the string back into an array


const displayTask = (monthlyPlanner) => {
//map through the monthlyPlanner array to extract the month selected by the user
  monthlyPlanner.map((plan) => {
    plan.month;
  
    const taskList = document.createElement('li'); //create an <li> element which will be appended to the <ul> element depending on the month selected
    taskList.textContent = `${plan.day} - ${plan.task}`;
  
    //use switch statement to appropriately append plan based on the month selected by the user
    switch(plan.month) {
      case "January":
        january.appendChild(taskList);
        break;
      case "February":
        february.appendChild(taskList);
        break;
      case "March":
        march.appendChild(taskList);
        break;
      case "April":
        april.appendChild(taskList);
        break;
      case "May":
        may.appendChild(taskList);
        break;
      case "June":
        june.appendChild(taskList);
        break;
      case "July":
      july.appendChild(taskList);
        break;
      case "August":
      august.appendChild(taskList);
        break;
      case "September":
      september.appendChild(taskList);
        break;
      case "October":
      october.appendChild(taskList);
        break;
      case "November":
      november.appendChild(taskList);
        break;
      case "December":
      december.appendChild(taskList);
        break;
      }
  });
};

if(monthlyPlanner !== null) {
  displayTask(monthlyPlanner);
}
