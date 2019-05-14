// Your code goes here

const image1 = document.querySelector(".container header img");

image1.addEventListener("mouseover", event => {
  image1.style.boxShadow = "2px 2px 10px";
  console.log(event.type);
});

image1.addEventListener("mouseout", event => {
  image1.style.boxShadow = "0px 0px 0px";
  console.log(event.type);
});

const headers = document.querySelectorAll(".container h2");
const colors = ["green", "yellow", "red", "blue", "lightBlue", "orange"];

document.addEventListener("keydown", event => {
  headers.forEach(
    header =>
      (header.style.color =
        colors[Math.round(Math.random() * colors.length - 1)])
  );
  console.log(event.type);
});

const header1 = document.querySelector(".container header h2");
const header1Text = [
  "This Bus Is Small!",
  "Bonjour!",
  "Generic Headline!",
  "Welcome To Fun Bus!"
];

document.addEventListener("wheel", event => {
  header1.textContent =
    header1Text[Math.round(Math.random() * header1Text.length - 1)];
  console.log(event.type);
});

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

img1.addEventListener("drag", event => {
  event.preventDefault();
});

img2.addEventListener("dragover", event => {
  event.preventDefault();
});

img2.addEventListener("drop", event => {
  event.preventDefault();
  console.log(event.type);
  let img1Holder = img1.src;
  let img2Holder = img2.src;
  img1.src = img2Holder;
  img2.src = img1Holder;
});

const bottomBtns = document.querySelectorAll(".btn");

bottomBtns.forEach(btn => {
  btn.addEventListener("dblclick", event => {
    console.log("Working");
    bottomBtns.forEach(bbtn => (bbtn.style.color = "red"));
  });
});
