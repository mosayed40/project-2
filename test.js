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
  let newPro = { title: title.value };
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
  let divMax = "";
  for (let i = 0; i < dataPro.length; i++) {
    divMax += `
     <div class="main">
     <h3>${dataPro[i].title}</h3>
        <div class="max">
             <img onclick="updateData( ${i} )" src="/project-2/assets/photos/Pencil.png" />
             <img onclick="deleteData( ${i} )" src="/project-2/assets/photos/delete.png" />
             <img onclick="doneData( ${i} )" src="/project-2/assets/photos/CheckCircle.png" />
        </div>
    </div>
    `;
  }
  document.querySelector("#part").innerHTML = divMax;
}
showData();

function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
function updateData(i) {
  title.value = dataPro[i].title;
  creat.innerHTML = "Update";
  creat.style.background = "green";
  mood = "update";
  ms = i;
}

function doneData(i) {
  document.querySelector(".main").style.background = "#000";
}
