let btn = document.getElementById("searchBtn");
let input = document.getElementById("movieInput");
let output = document.getElementById("output");

// when button is clicked
btn.addEventListener("click", function() {
    let movieName = input.value;

    if (movieName === "") {
        output.innerHTML = "Please type a movie name.";
        return;
    }

    // fetch movie from omdb api (you need your own key)
    fetch("https://www.omdbapi.com/?t=" + movieName + "&apikey=beaa9fc2")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        if (data.Response === "True") {
            output.innerHTML = `
                <h2>${data.Title}</h2>
                <p>Year: ${data.Year}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Plot: ${data.Plot}</p>
                <img src="${data.Poster}">
            `;
        } else {
            output.innerHTML = "Movie not found.";
        }
    })
    .catch(function(error) {
        output.innerHTML = "Error in fetching data.";
        console.log(error);
    });
});
