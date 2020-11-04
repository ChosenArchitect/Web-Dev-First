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

document.getElementById("btCyan").addEventListener("click", invertColorCyan);

document
  .getElementById("btYellow")
  .addEventListener("click", invertColorYellow);

document
  .getElementById("btMagenta")
  .addEventListener("click", invertColorMagenta);

document.getElementById("btBlack").addEventListener("click", invertColorBlack);

function invertColorCyan() {
  var boxColor = document.getElementById("cyan");
  if (boxColor.style.backgroundColor === "cyan") {
    boxColor.style.backgroundColor = "red";
  } else {
    boxColor.style.backgroundColor = "cyan";
  }
}

function invertColorYellow() {
  var boxColor = document.getElementById("yellow");
  if (boxColor.style.backgroundColor === "yellow") {
    boxColor.style.backgroundColor = "blue";
  } else {
    boxColor.style.backgroundColor = "yellow";
  }
}

function invertColorMagenta() {
  var boxColor = document.getElementById("magenta");
  if (boxColor.style.backgroundColor === "magenta") {
    boxColor.style.backgroundColor = "green";
  } else {
    boxColor.style.backgroundColor = "magenta";
  }
}

function invertColorBlack() {
  var boxColor = document.getElementById("black");
  if (boxColor.style.backgroundColor === "black") {
    boxColor.style.backgroundColor = "white";
  } else {
    boxColor.style.backgroundColor = "black";
  }
}
