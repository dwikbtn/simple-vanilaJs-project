const color1 = document.querySelector(".color1");
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

  //create color2
  const beforeColor = document.querySelector("section.container .css-code");
  section.insertBefore(inputClr2, beforeColor);
  const color2 = document.querySelector(".color2");

  //change gradient
  changeGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  };

  //add gradient after click
  if (color2 != null) {
    changeGradient();
    //removeAddButton
    const addButton = document.querySelector("section.container .add-color");
    section.removeChild(addButton);
  }

  color1.addEventListener("input", changeGradient);
  color2.addEventListener("input", changeGradient);
});

//change single color
changeColor = () => {
  const color2 = document.querySelector(".color2");
  if (color2 == null) {
    body.style.background = color1.value;
  }
};

//remove the plus
// if (color2 != null) {
//   const color2 = document.querySelector(".color2");
//   console.log(color2);
//   removeButtonEl = () => {
//     const addcolorEl = document.querySelector("section.container .add-color");
//     console.log(addColorEL);
//   };
// }

//start the input from the begining
window.onload = changeColor();
color1.addEventListener("input", changeColor);
