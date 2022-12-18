document.getElementsByClassName("slid").onmouseover = function() {mouseOver()};
document.getElementsByClassName("slid").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementsByClassName("slid").style.color = "#000";
}

function mouseOut() {
  document.getElementsByClassName("slid").style.color = "black";
}