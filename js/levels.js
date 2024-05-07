// progress start
let sectionTop = document.querySelector("#progress");
let spanProg = document.querySelectorAll(".prog-holder .prog span");

function progress() {
  if (window.scrollY >= sectionTop.offsetTop - 250) {
    spanProg.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spanProg.forEach((span) => {
      span.style.width = 0;
    });
  }
}

window.addEventListener("scroll", progress);
// progress end
