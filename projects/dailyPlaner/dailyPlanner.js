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

const newTd = document.createElement("td");
const buttons = document.querySelectorAll("button.btn");
const inputs = document.querySelectorAll("input.form-control");
const inputArray = [...inputs];
const tableData = document.querySelectorAll("tbody tr");

//close button
tableData.forEach((table) => {
  const addButton = document.createElement("td");
  const classes = document.createElement("button");
  classes.className = "btn-close";

  addButton.appendChild(classes);

  table.appendChild(addButton);
});
