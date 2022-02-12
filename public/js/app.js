let form = document.querySelector("#form");
let form_update = document.querySelector("#form_update");
let studentName = document.querySelector("#name");
let studentId = document.querySelector("#std_id");
let studentEmail = document.querySelector("#email");
let studentCourses = document.querySelector("#courses");
let form_delete = document.getElementById("form_delete");

//!create employee part
form.addEventListener("submit", async e => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    course: std_courses,
  };
  let url = "http://localhost:4000/api/students";
  let body = await window.fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});

//!read all employee part
let body1 = document.getElementById("body1");
// body1.style = "background: linear-gradient(to left, green 0%, black 100%)";
let view = document.querySelector("#view");
view.addEventListener("click", async e => {
  e.preventDefault();
  let url = "http://localhost:4000/api/students";
  let data = (await fetch(url)).json().then(user => {
    let data1 = user.payload;
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
      body1.innerHTML += `<h2>student name:${data1[i].name}</h2>
      <h2>student id:${data1[i].std_id}</h2> 
      <h3>student email:${data1[i].email}</h3> 
      <h4>student courses:${data1[i].courses}</h4>
      =====================`;
    }
    // console.log(data);
  });
});
setTimeout(() => {
  body1.innerHTML = "";
}, 2000);

//!edit student part
form_update.addEventListener("submit", async e => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let mongo_id = e.target[4].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    course: std_courses,
  };
  let url = `http://localhost:4000/api/students/${mongo_id}`;
  let body = await window.fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  //not needed==============just for checking if the object is updated on console
});

//!delete student part
form_delete.addEventListener("submit", async e => {
  e.preventDefault();
  let mongo_id = e.target[0].value;
  console.log(mongo_id);
  console.log(e.target);
  let url = `http://localhost:4000/api/students/${mongo_id}`;
  let body = await window.fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  //not needed==============just for checking if the object is updated on console
});
