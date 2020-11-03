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
    const are = 'You Are: ';
    const age = currentYear - birthYear;
    document.getElementById("myAge").innerHTML = (are + age);
  } else {
    document.getElementById("myAge").innerHTML = ("Are you from the future?");
  }
}