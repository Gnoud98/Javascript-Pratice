// create fnc start
// create fnc get data from API
// create fnc createCourse
// + method : POST
// create fnc deleteCourse
// + method : Delete

const courseApi = "http://localhost:3000/courses";

function startApp() {
  getCourses(renderCourse);
  handleCreateCourse();
}
startApp();

function getCourses(render) {
  fetch(courseApi)
    .then((res) => {
      return res.json();
    })
    .then(render);
}

function renderCourse(courses) {
  let listCourseBlock = document.querySelector("#list-course");
  let htmls = courses.map((course) => {
    return `
        <li>
        <h2>${course.title}</h2>
        <div>${course.desc}</div>
        </li>
        `;
  });
  listCourseBlock.innerHTML = htmls.join("");
}

function createCourse(data,render) {
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch(courseApi,options)
      .then((res) => {
        return res.json();
      })
      .then(render)
}

function handleCreateCourse() {
  let btnCreate = document.querySelector("#create");
  btnCreate.addEventListener("click", () => {
      let title= document.querySelector('input[name="name"]').value;
      let desc=document.querySelector('input[name="desc"]').value;
      let formData ={
        title:title,
        desc:desc
      }
      createCourse(formData,function () {
        getCourses(renderCourse);
      });
  });
}
