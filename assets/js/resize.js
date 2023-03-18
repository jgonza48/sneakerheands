
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementsByClassName("button");
    let header1 = document.getElementById("header1");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
  {
    header1.style.fontSize = "2em";
    header1.style.color = "#000"; /* Fallback for older browsers */
    header1.style.color = rgba(0, 0, 0, 0.5);

    for (let i = 0; i < button.length; i++) { button[i].style.padding = "6px"; }
  } 
  else {
        header1.style.fontSize = "3em";
    
        for (let i = 0; i < header1.length; i++) { button[i].style.padding = "12px"; }
  }
}
