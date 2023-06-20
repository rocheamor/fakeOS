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
  });
}

