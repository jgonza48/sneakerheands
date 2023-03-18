
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementsByClassName("button");
    let header1 = document.getElementById("header1");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
  {
    header1.style.fontSize = "2em";
    header1.style.color = "rgba(255, 255, 255, 0.5)";

    for (let i = 0; i < button.length; i++) { 
      button[i].style.padding = "6px"; 
      button[i].style.background = "rgb(60, 136, 187, 0.4)";  }
  } 
  else {
        header1.style.fontSize = "3em";
        header1.style.color = "rgba(255, 255, 255)";

        for (let i = 0; i < header1.length; i++) { 
          button[i].style.padding = "12px";
          button[i].style.background-color = "initial";
          button[i].style.background-image = "linear-gradient(-180deg, rgb(60, 136, 187), rgb(16, 52, 107));" 
        }
  }
}
