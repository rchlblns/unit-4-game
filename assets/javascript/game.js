$(document).ready(function() {

$("#pink-gem").on("click", function() {
    console.log("You clicked the pink gem!");
});

$("#purple-gem").on("click", function() {
    console.log("You clicked the purple gem!");
});

$("#teal-gem").on("click", function() {
    console.log("You clicked the teal gem!");
});

$("#yellow-gem").on("click", function() {
    console.log("You clicked the yellow gem!");
});

var targetNumber = Math.floor(Math.random() * 200);

$("#number-to-guess").text(targetNumber);
    console.log(targetNumber);

});