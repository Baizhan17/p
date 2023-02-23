// Get a reference to the form and input elements
var form = document.getElementById("sub");
var input = document.getElementById("sub");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  var text = input.value.trim();

  // Display an alert message if the input field is not empty
  if (text) {
    alert("You entered: " + text);
  }
});
