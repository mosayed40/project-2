const title = document.getElementById("title");
const creat = document.getElementById("but");


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
  dataPro.push(newPro);
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
             <img  src="/assets/photos/Pencil.png" />
             <img onclick="deleteData( ${i} )" src="/assets/photos/delete.png" />
             <img  src="/assets/photos/CheckCircle.png" />
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

