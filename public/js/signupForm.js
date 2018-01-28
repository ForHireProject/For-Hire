$(document).ready(function () {
  // when user clicks add-btn

  $(".modal-trigger").on("click", function (event) {
    event.preventDefault();
    
    
    console.log("Adding newWorker...");

    // make a newWorker obj
    var newWorker = {
      // name from name input
      name: $(".inputName").val().trim(),
      // zip-code from input
      zipcode: $(".inputZipcode").val().trim(),
      // email from input
      email: $(".inputEmail").val().trim(),
      // phone from input
      phone: $(".inputPhone").val().trim(),
      // service input
      service: $("#inputService :selected").text().trim()

    };

    console.log(newWorker);
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newWorker)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a newWorker with an alert window
        alert("Adding newWorker...");
      });
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#zipCode").val("");
    $("#email").val("");
    $("#telephone").val("");
    $("#service").val("");
  });
});