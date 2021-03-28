let rndm = null;
function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";
  rndm = bgColor;
}

function change_bg() {
  const bgDay = document.querySelectorAll(".day-margin");

  bgDay.forEach((color) => {
    random_bg_color();
    color.style.background = rndm;
  });
}

function random_day_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const rndmColor = "rgb(" + x + "," + y + "," + z + ")";

  const bgEachDay = document.querySelector(".day h2");
  bgEachDay.style.color = rndmColor;
}

change_bg();
random_day_color();
