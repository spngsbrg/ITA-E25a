function init() {
  let mainContentArea = document.getElementById("main-content-area");

  fetchData("Data/data.json").then((data) => {
    console.log(data);

    data.forEach(addArticleToPage, mainContentArea);
  });
}

function addArticleToPage(article, parrentElement) {
  let contentToInsert = "";

  let articleToInsert =
    "<div id='" +
    article.id +
    "' class='content'>" +
    "<h1>" +
    article.heading +
    "</h1>" +
    "<p class='inner-content'>" +
    contentToInsert +
    "</p>" +
    //authorElementToInsert
    "<p class='author'<strong>" +
    article.author +
    "</strong></p>" +
    "<p class='contact'>" +
    article.email +
    "</p>" +
    "</div>";

  parrentElement.innerHTML = parrentElement.innerHTML + articleToInsert;
}

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
