let mainContentArea = document.getElementById("main-content-area");

fetchData("Data/data.json").then((data) => {
  console.log(data);
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
