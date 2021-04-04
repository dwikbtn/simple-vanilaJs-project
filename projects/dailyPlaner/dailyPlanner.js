let rndm = null;
let rndmTitle = null;

// random background color
function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  rndm = bgColor;
}

function random_day_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const rndmColor = "rgb(" + x + "," + y + "," + z + ")";

  rndmTitle = rndmColor;
}

function change_bg() {
  const bgDay = document.querySelectorAll(".day-margin");
  const bgEachDay = document.querySelectorAll(".day h2");

  bgDay.forEach((color) => {
    random_bg_color();
    color.style.background = rndm;
  });
  bgEachDay.forEach((clr) => {
    random_day_color();
    clr.style.color = rndmTitle;
  });
}

change_bg();
random_day_color();

//add new list

const buttons = document.querySelectorAll("button.btn");
const inputs = document.querySelectorAll("input.form-control");
const inputArray = [...inputs];
const tb = document.querySelectorAll("tbody");
const tbArray = [...tb];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (inputArray[i].value != "") {
      const tdTime = document.createElement("td");
      const inputTime = document.createElement("input");
      inputTime.setAttribute("type", "time");
      tdTime.appendChild(inputTime);
      //dd button
      const addButton = document.createElement("td");
      const classes = document.createElement("button");
      classes.className = "btn-close";
      addButton.appendChild(classes);
      //add list
      let newTr = document.createElement("tr");
      let newTd = document.createElement("td");
      newTd.className = "plan";
      inputValue = document.createTextNode(inputArray[i].value);
      newTr.appendChild(tdTime);
      newTr.appendChild(newTd);
      newTd.appendChild(inputValue);
      newTr.appendChild(addButton);
      tbArray[i].appendChild(newTr);

      inputArray[i].value = "";
      //catch the new TR and delete
      deleteTR();
    }
  });
}

//add cross
function deleteTR() {
  const delTr = document.querySelectorAll("tbody tr");
  const selTr = document.querySelectorAll(".plan");
  for (let i = 0; i < selTr.length; i++) {
    selTr[i].addEventListener("click", function () {
      delTr[i].classList.toggle("selected");
    });
  }
}
