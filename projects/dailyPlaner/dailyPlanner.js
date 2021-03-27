function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";

  const bgDay = document.querySelector(".day");
  const bgEachDay = document.querySelector(".day h2");
  bgDay.style.background = bgColor;
  bgEachDay.style.color = bgColor;
}

function random_day_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const rndmColor = "rgb(" + x + "," + y + "," + z + ")";

  const bgEachDay = document.querySelector(".day h2");
  bgEachDay.style.color = rndmColor;
}
random_bg_color();
random_day_color();
