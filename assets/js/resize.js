
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementsByClassName("button");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "2em";
    
    for (let i = 0; i < button.length; i++) {
        button[i].style.padding = "6px";
    }
  } else {
    document.getElementById("header1").style.fontSize = "3em";
    
    for (let i = 0; i < header1.length; i++) {
        button[i].style.padding = "12px";
    }
  }
}
