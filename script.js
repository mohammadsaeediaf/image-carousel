const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let counter = 0;
next.addEventListener("click", () => {
  counter += counter < 87.5 ? 12.5 : 0;
  slider.style.transform = `translate(-${counter}%)`;
});

prev.addEventListener("click", () => {
  counter += counter > 0 ? -12.5 : 0;
  slider.style.transform = `translate(-${counter}%)`;
});
