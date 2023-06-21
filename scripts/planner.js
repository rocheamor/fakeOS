const plannerFormPage = document.querySelector('.navbar__add-button');
plannerFormPage.addEventListener('click', function() {
  window.location.href = './planner-form.html';
});

const homePage = document.querySelector('.navbar__close-button');
homePage.addEventListener('click', function() {
  window.location.href = './fakeOS.html';
});



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

//MONTHS VARIABLE

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


const plannerString = sessionStorage.getItem('monthlyPlanner');
// console.log(plannerString, "planner string");
let monthlyPlanner = [];
// // Parse the string back into an array
monthlyPlanner = JSON.parse(plannerString);




const displayTask = (monthlyPlanner) => {

  monthlyPlanner.map((plan) => {
    plan.month;
  
    const taskList = document.createElement('li');
    taskList.textContent = `${plan.day} - ${plan.task}`;
  
    switch(plan.month) {
      
      case "January":
        january.appendChild(taskList);
        break;
      case "February":
        february.appendChild(taskList);
        console.log("dbhjD");
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
  console.log(monthlyPlanner);
}
