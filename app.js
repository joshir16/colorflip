/** @format */
"use strict";

const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

const hexBtn = document.getElementById("hex");
const rgbaBtn = document.getElementById("rgba");

// ------------------------------------- color type
let colorType = "hex";

hexBtn.addEventListener("click", function () {
  colorType = "hex";
  color.textContent = "#FAC9A3";
  document.body.style.backgroundColor = "#FAC9A3";
});

rgbaBtn.addEventListener("click", function () {
  colorType = "rgba";
  color.textContent = " rgb(175, 183, 92)";
  document.body.style.backgroundColor = " rgb(175, 183, 92)";
});

// -------------------------------------hex function
const hexC = function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += colorArray[getHexRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

function getHexRandomNumber() {
  return Math.floor(Math.random() * colorArray.length);
}

// -------------------------------------- rgba function

const rgbaC = function () {
  let a = getRgbaRandomNumber();
  let b = getRgbaRandomNumber();
  let c = getRgbaRandomNumber();
  let rgbaColor = `rgba(${a}, ${b}, ${c}, 1)`;

  color.textContent = rgbaColor;
  document.body.style.backgroundColor = rgbaColor;
};

function getRgbaRandomNumber() {
  return Math.floor(Math.random() * 255);
}

// --------------------------------------- EVENT Handle

btn.addEventListener("click", function () {
  if (colorType === "rgba") {
    rgbaC();
  } else {
    hexC();
  }
});

/////////////////////////////////////////////////////////////////////
//----------------------- nav item select ---------------------------
/////////////////////////////////////////////////////////////////////

hexBtn.addEventListener("click", function () {
  if (!hexBtn.classList.contains("item_active")) {
    hexBtn.classList.add("item_active");
    rgbaBtn.classList.remove("item_active");
    document.title = "Color Switch | HEX";
  }
});

rgbaBtn.addEventListener("click", function () {
  if (!rgbaBtn.classList.contains("item_active")) {
    rgbaBtn.classList.add("item_active");
    hexBtn.classList.remove("item_active");
    document.title = "Color Switch | RGB";
  }
});
