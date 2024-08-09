document.getElementById("demo").innerHTML = createMYHTML();

function createMYHTML() {
  let fname = [
    "Safar",
    "lidya",
    "Fowsia",
    "Hussain",
    "Iyo",
    "Alan",
    "CJ",
    "Charline",
    "Suzane",
    "Amber",
    "Salah",
  ];

  let myTeacher = "Sadeed";
  let myHTML = `<h1>Good Evening ${myTeacher}</h1> <ol>`;

  console.log(fname);

  for (a = 0; a < fname.length; a++) {
    myHTML += `<li>${fname[a]}</li>`;
    //myHTML = myHTML + myHTML;
  }
  myHTML + "</ol>";

  return myHTML;
}
