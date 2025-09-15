const updateStudent = async (URL, student) => {
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: student,
  });

  const data = await response.json();

  console.log(data.message);
};
updateStudent(BASEURL + "/students/3", { id: 3, name: "Geek3 Updated" });
Ricky
7:04 PM
console.log("1: Start");

// fetch call (async operation)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(res) {
    console.log("2: Got Response, parsing JSON...");
    return res.json();
  })
  .then(function(data) {
    console.log("3: Parsed Data:", data);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

console.log("4: End");
Ricky
7:10 PM
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.meals) {
        showRecipes(data.meals);
      } else {
        recipesDiv.innerHTML = "No recipes found 😕";
      }
    })
    .catch(function(error) {
      console.log(error);
      recipesDiv.innerHTML = "Something went wrong!";
    });