class MovieApp {
  constructor(name) {
    this.name = name;
  }

  fetchMovie() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(function(response) {
        console.log("Inside regular function, this.name =", this.name);
        return response.json();
      })
      .then(function(data) {
        console.log("Regular function data:", data);
      });

    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => {
        console.log("Inside arrow function, this.name =", this.name);
        return response.json();
      })
      .then((data) => {
        console.log("Arrow function data:", data);
      });
  }
}

let app = new MovieApp("My Movie App");
app.fetchMovie();