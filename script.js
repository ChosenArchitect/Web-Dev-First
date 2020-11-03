/* function getAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = document.getElementById("yearText").value;
  const are = 'You Are: ';
  const age = currentYear - birthYear;
  document.getElementById("myAge").innerHTML = (are + age);
}
*/

function getAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = document.getElementById("yearText").value;
  if (birthYear <= currentYear) {
    if (birthYear >= 1900) {
      const are = "You Are: ";
      const age = currentYear - birthYear;
      document.getElementById("myAge").innerHTML = are + age;
    } else {
      document.getElementById("myAge").innerHTML = "Are you a time traveler?";
    }
  } else {
    document.getElementById("myAge").innerHTML = "Are you from the future?";
  }
}

function changeColorCyan() {
  var element = document.getElementById("cyan"),
    style = window.getComputedStyle(element),
    color = style.getPropertyValue("background-color");
  if ((color = "cyan")) {
    document.getElementById("cyan").style.backgroundColor = "red";
  } else {
    document.getElementById("cyan").style.backgroundColor = "cyan";
  }
}
function changeColorYellow() {
  var element = document.getElementById("yellow"),
    style = window.getComputedStyle(element),
    color = style.getPropertyValue("background-color");
  if ((color = "yellow")) {
    document.getElementById("yellow").style.backgroundColor = "blue";
  } else {
    document.getElementById("yellow").style.backgroundColor = "yellow";
  }
}
function changeColorMagenta() {
  var element = document.getElementById("magenta"),
    style = window.getComputedStyle(element),
    color = style.getPropertyValue("background-color");
  if ((color = "magenta")) {
    document.getElementById("magenta").style.backgroundColor = "green";
  } else {
    document.getElementById("magenta").style.backgroundColor = "magenta";
  }
}
function changeColorBlack() {
  var element = document.getElementById("black"),
    style = window.getComputedStyle(element),
    color = style.getPropertyValue("background-color");
  if ((color = "black")) {
    document.getElementById("black").style.backgroundColor = "white";
  } else {
    document.getElementById("black").style.backgroundColor = "black";
  }
}
