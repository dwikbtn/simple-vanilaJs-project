const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const cssCode = document.querySelector(".css-code");
const addColor = document.querySelector(".add-color");
const section = document.querySelector("section.container");

//add Color
addColor.addEventListener("click", function () {
  const inputClr2 = document.createElement("input");
  // inputClr2.setAttribute("type", "color");
  function setAttributes(el, attrs) {
    for (const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  setAttributes(inputClr2, {
    type: "color",
    class: "color2",
    value: "#ffff66",
  });
  console.log(inputClr2);
});

//change color
changeColor = () => {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  cssCode.textContent = body.style.background + ";";
};

//start the input from the begining
window.onload = changeColor();

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
