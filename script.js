let themeCircles = document.getElementsByClassName("circles");
const links = document.getElementById("nav-links");
const nav = document.getElementById("hamburger");

// on scroll
const navDiv = document.getElementById("nav");
const circle = document.querySelectorAll(".circles");
const aTag = document.querySelectorAll(".link");
const burgerDiv = document.querySelectorAll(".ham");
// add links to styles
const liTag = document.querySelectorAll(".li");
// change harmburger shape
const fl = document.getElementById("fl");
const sl = document.getElementById("sl");
const tl = document.getElementById("tl");
// render date dynamically
const dateTag = document.getElementById("date");

const date = new Date().getFullYear();
dateTag.innerHTML = date;

// on scroll function
window.onscroll = function () {
  "use strict";
  if (window.scrollY > 100) {
    navDiv.classList.add("nav__colored");
    circle.forEach(function (a) {
      a.classList.add("circle__colored");
    });
    aTag.forEach(function (a) {
      a.classList.add("link__colored");
    });
    burgerDiv.forEach(function (a) {
      a.classList.add("ham__colored");
    });
  } else {
    navDiv.classList.remove("nav__colored");
    circle.forEach(function (a) {
      a.classList.remove("circle__colored");
    });
    aTag.forEach(function (a) {
      a.classList.remove("link__colored");
    });
    burgerDiv.forEach(function (a) {
      a.classList.remove("ham__colored");
    });
  }
};

// display nav on click for smaller screens
nav.addEventListener("click", () => {
  links.classList.toggle("ul__active");

  fl.classList.toggle("fl-active");
  sl.classList.toggle("sl-active");
  tl.classList.toggle("tl-active");

  liTag.forEach(function (a) {
    a.classList.add("li__active");
  });
});
