
var text = '';
function findMeal() {
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}


function connectMeal(text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(response => response.json())
        .then(data => loadMeal(data));

}

connectMeal();

function loadMeal(data) {

    console.table(data.meals[0]);

    var container = document.getElementById('main-container');

    var id = data.meals[0].idMeal;
    var title = data.meals[0].strMeal;
    var imgLink = data.meals[0].strMealThumb;
    var instruction = data.meals[0].strInstructions;



    container.innerHTML =
        `<p><b> <br>Recipe ID:</b> ${id} </p>
                         <p><b> ${title} </b></p>
                         <img src="${imgLink}" >
                        <p><br> <b> Cooking Instructions: </b> ${instruction} </p>`
        ;



    container.appendChild(newDiv);

}

