$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  method: "POST",
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log(err);
  }
});