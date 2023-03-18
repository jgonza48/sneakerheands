
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementsByClassName("button");
    let header1 = document.getElementById("header1");
    let numInput = document.getElementById("number");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
  {
    header1.style.fontSize = "2em";
    header1.style.color = "rgba(255, 255, 255, 0.5)";
    numInput.style.padding = " 6px 14px"

    for (let i = 0; i < button.length; i++) { 
      button[i].style.padding = "6px 12px"; 
      button[i].style.background = "rgb(60, 136, 187, 0.4)";  }
  } 
  else {
        header1.style.fontSize = "3em";
        header1.style.color = "rgba(255, 255, 255)";
        numInput.style.padding = " 10px 14px";

        for (let i = 0; i < button.length; i++) { 
          button[i].style.padding = "12px 24px";
          button[i].style.background = "rgb(38, 62, 105)"; 
        }
  }
}
