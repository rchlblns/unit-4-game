$(document).ready(function() {

//Generates random number 
var targetNumber = Math.floor(Math.random() * (120-19) + 19);

//And displays it on the browser
$(".number-to-guess").text("Number to guess: " + targetNumber);
    console.log(targetNumber);

//Global variable for storing user's score
var counter = 0;
var wins = 0;
var losses = 0;

$(".your-guess").text("Your guess: " + counter);
$(".wins-text").text("Wins: " + wins);
$(".losses-text").text("Losses: " + losses);

//Array of different gem images
var gemImages = ["assets/images/pinkgem.svg", "assets/images/purplegem.svg", "assets/images/tealgem.svg", "assets/images/yellowgem.svg"];

//Making gem images into buttons
function gemButton() {
    for (var i = 0; i < gemImages.length; i++) {
    
        var image = $("<img>");
        image.addClass("gem-buttons gem gem-image");
        image.attr("src", gemImages[i]);
        //Assigns random number to each gem
        image.attr("data-letter", Math.floor(Math.random() * 12) +1);
        $("#gems").append(image);
    }
}

//Calls gemButton function
gemButton();

//When user clicks on a gem 
$(".gem-buttons").on("click", function() {

    //Assigns random number to each click
    var gemValue = ($(this).attr("data-letter"));
    gemValue = parseInt(gemValue);
    //Adds every click to global counter
    counter += gemValue;

    console.log(gemValue);
    console.log(counter);

    $(".your-guess").text("Your guess: " + counter);

    if (counter === targetNumber) {
    alert("You win!");
    wins++;
    $(".wins-text").text("Wins: " + wins);
    $(".your-guess").empty();
    }

    else if (counter >= targetNumber) {
    alert("You lose!");
    losses++;
    $(".losses-text").text("Losses: " + losses);
    }

});

});

