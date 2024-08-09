//Data Fetch Pattern Starts
//alert("Hi");
/*
fetch(
  "jobs.json"
  //"https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json"
) //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //testing to see if the data is pickedup from json file or not
    const jobs = data;
    getJobs(jobs);
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your path", error)
  );

function getJobs(jobs) {
  console.log(jobs);

  const myHtml = `<h1>Sadeed</h1>`;
  document.getElementById("job-listing-container").innerHTML = myHtml;
}
*/
//Data Fetch Pattern Ends

fetch(
  "jobs.json"
  //"https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json"
) //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //testing to see if the data is pickedup from json file or not
    const jobs = data;
    getJobs(jobs);
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your path", error)
  );

function getJobs(jobs) {
  console.log(jobs);

  let myHtml = "";
  for (a = 0; a < jobs.length; a++) {
    myHtml += `
  <h3>${jobs[a].title}</h3>
  <p>${jobs[a].company}</p>
  <p>${jobs[a].location}</p>
  <p>${jobs[a].description}</p>
  <hr>
 
  `;
  }

  console.log(myHtml);

  document.getElementById("job-listing-container").innerHTML = myHtml;
}
