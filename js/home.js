//stats start
let nums = document.querySelectorAll(".stats .box .number")
let statsSection = document.querySelector(".stats")
let started = false;

function startCount (ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count)
    }
  }, (3000 / goal));
}

function stats() {
  if (window.scrollY >= statsSection.offsetTop - 350) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num)
      })    
    }
    started = true;
    }
}

window.addEventListener("scroll", stats)
//stats end 