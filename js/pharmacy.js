// welcome message start
let welcomeMsg = `Hello from JS my fellow Pharmacy Students !`
console.log(`%c${welcomeMsg} %cit's Ahmed-Skaîk typing..`, `color:#3434ff; font-size: 25px; background-color: #fff; text-decoration: underline wavy #08082c;`, `color: red; font-size: 25px; padding-top: 25px`) 
// welcome message end 


// loading screen start
function loading() {
  let loader = document.querySelector(".loading")
  loader.className += " hidden"
}

window.addEventListener("load", loading)

//to prevent scrolling during loading animation is applied 
$(window).load(function() {
  $('body').css({'overflow':'auto', 'height':'auto', 'position':'relative'});
});
// loading screen end 


// scroll up start
let up = document.getElementById("up")

up.onclick = function () {
  window.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
}

function scroll() {
  if (scrollY >= 200) {
    up.style.right = "12px";
  }else {
    up.style.right = "-100px";
  }
}

window.addEventListener("scroll", scroll)
// scroll up end


// full screen btn start
let myDocument = document.documentElement;
let fullScreenBtn = document.querySelector("#full-screen") ;

function click() { 
  if (fullScreenBtn.innerHTML = '<i class="fa-solid fa-expand fa-fw"></i>') {
    if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen();
    }else if (myDocument.msRequestFullscreen) {
      myDocument.msRequestFullscreen();
    }else if (myDocument.mozRequestFullscreen) {
      myDocument.mozRequestFullscreen();
    }else if (myDocument.webkitRequestFullscreen) {
      myDocument.webkitRequestFullscreen();
    }
    fullScreenBtn.innerHTML = '<i class="fa-solid fa-compress fa-fw"></i>';
  }else { 
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }else if (document.mozExitFullscreen) {
      document.mozExitFullscreen();
    }else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    fullScreenBtn.innerHTML = '<i class="fa-solid fa-expand fa-fw"></i>';
  }
}

fullScreenBtn.addEventListener("click", click)
// full screen btn end 


// tooltip start 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// tooltip end 


// prevent hot keys start
  document.onkeydown = function(e) { 
    if(event.keyCode == 123) {
      return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      return false
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      return false
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      return false
    }
    if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      return false
    }
  }

  document.addEventListener("contextmenu", function(e) { 
    e.preventDefault();
  })
// prevent hot keys end

// fixed element start
var headerContainer = document.querySelector("nav > .container") 
var headerContainerAfter = window.getComputedStyle(headerContainer, "::after")
// console.log(headerContainerAfter.top)
// fixed element end 