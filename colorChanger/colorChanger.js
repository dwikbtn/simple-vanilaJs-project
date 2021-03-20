const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const cssCode = document.querySelector(".css-code");

//change color
changeColor = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssCode.textContent = body.style.background + ";";
};

//start the input from the begining
window.onload = changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
