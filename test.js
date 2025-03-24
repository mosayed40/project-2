const title = document.getElementById("title");
const creat = document.getElementById("but");

let mood = "creat";
let ms;
// Array
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}
// creat==
creat.onclick = function () {
  let newPro = { title: title.value, status: "active" };
  if (mood === "creat") {
    dataPro.push(newPro);
  } else {
    dataPro[ms] = newPro;
    mood = "creat";
    creat.innerHTML = "creat";
    creat.style.background = "#3738508f";
  }

  //   add.file-localstorage===
  localStorage.setItem("product", JSON.stringify(dataPro));

  clearData();
  showData();
};
//  clear
function clearData() {
  title.value = "";
}
// show====
function showData() {
  let active = "";
  let inActive = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (dataPro[i].status === "active") {
      active += `
       <div class="main card-${i}">
       <h3>${dataPro[i].title}</h3>
          <div class="max">
               <img onclick="updateData( ${i} )" src="/assets/photos/Pencil.png" />
               <img onclick="deleteData( ${i} )" src="/assets/photos/delete.png" />
               <img onclick="doneData( ${i} )" src="/assets/photos/CheckCircle.png" />
          </div>
      </div>
      `;
    } else {
      inActive += `
       <div class="main done card-${i}">
       <h3>${dataPro[i].title}</h3>
          <div class="max">
               <img onclick="updateData( ${i} )" src="/assets/photos/Pencil.png" />
               <img onclick="deleteData( ${i} )" src="/assets/photos/delete.png" />
               <img onclick="doneData( ${i} )" src="/assets/photos/CheckCircle.png" />
          </div>
      </div>
      `;
    }
  }
  document.querySelector("#active").innerHTML = active;
  document.querySelector("#done").innerHTML = inActive;
}
showData();

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
function updateData(i) {
  document.querySelector(`.card-${i}`).style.background = "#00000010";
  title.value = dataPro[i].title;
  creat.innerHTML = "Update";
  creat.style.background = "green";
  mood = "update";
  ms = i;
}

function doneData(i) {
  dataPro[i].status = dataPro[i].status === "active" ? "done" : "active";
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
