let welcomeMsg = `Hello from JS fellow Pharmacy students !`
console.log(welcomeMsg)

// loading screen start

// uncommint the follownig when releasing the websitee **********************

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
