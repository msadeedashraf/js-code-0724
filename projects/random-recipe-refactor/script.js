//alert("Hi testing my JS");
/*
//To fetch json data from any URL

fetch("YOUR_URL")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching json data, please check your path", error);
  });
*/

const meal_container = document.getElementById("meal");

fetch("https://www.themealdb.com/api/json/v1/1/random.php") //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    const meal = data.meals[0];
    getMeal(meal);
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your path", error)
  );

function getMeal(meal) {
  console.log(meal);

  const ingredients = [];
  //console.log(ingredients);
  //console.log(meal["strMeasure3"]);

  for (let a = 1; a <= 20; a++) {
    if (meal[`strIngredient${a}`]) {
      ingredients.push(
        `${meal[`strIngredient${a}`]} --- ${meal[`strMeasure${a}`]}   `
      );
    } else {
      break;
    }
  }

  /*
  let myIngredinetHTML = "";
  for (let b = 0; b < ingredients.length; b++) {
    myIngredinetHTML += `<li>${ingredients[b]}</li>`;
  }
    */

  //console.log(ingredients);
  //console.log(myIngredinetHTML);
  const myHTML = `<div class="row">
    <div class="columns five">
        <h2>${meal.strMeal}</h2>
        <img src=${meal.strMealThumb} alt="Meal Image">
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Tags:</strong> ${meal.strTags}</p>
        <h5>Ingredients:</h5>
        <ul>
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        
        </ul>
    </div>
    <div class="columns seven">
        <h4>${meal.strMeal}</h4>
        <p>${meal.strInstructions}</p>
    </div>
</div>

<div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
        <iframe  src="https://www.youtube.com/embed/${meal.strYoutube.slice(
          -11
        )}">>
        
        </iframe>
    </div>
</div>`;

  document.getElementById("meal").innerHTML = myHTML;
}
