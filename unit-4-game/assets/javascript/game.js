$(document ).ready(function() {

var randomNumber = Math.floor(Math.random() * 105 + 15)

//Selects a random number to be shown to the user at the beginning of the game.
//Number should be between 15-120.

$('#randomNumber').text(randomNumber);

//Setting up random numbers for each gem
//Random number has to be between 1 and 12.
 var num1= Math.floor(Math.random() * 11 + 1)
var num2= Math.floor(Math.random() * 11 + 1)
var num3= Math.floor(Math.random() * 11 + 1)
var num4= Math.floor(Math.random() * 11 + 1)
//Declaring variables for tallies
var playerTotal= 0;
var wins= 0;
var losses= 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);
//Resets the game
function reset() {
    randomNumber= Math.floor(Math.random()*105+15);
    console.log(randomNumber)
    $("#randomNumber").text(randomNumber);
    num1= Math.floor(Math.random() * 11 + 1);
    num2= Math.floor(Math.random() * 11 + 1);
    num3= Math.floor(Math.random() * 11 + 1);
    num4= Math.floor(Math.random() * 11 + 1);
    playerTotal= 0;
    $("finalTotal").text(playerTotal);
}
//Adds the wins to the playerTotal.
function hooray(){
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}
//Adds the losses to the playerTotal.
function loser() {
    alert("Aw, Try Again!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}
//Settin up the clicks to the gems.
$("#one").on('click', function() {
    playerTotal= playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $("#finalTotal").text(playerTotal);
    //Sets win or lose conditions
    if (playerTotal === random) {
        hooray();
    }
    else if (playerTotal > random) {
        loser();
    }
})
//Setting up the click to gem 2
$("#two").on('click', function() {
    playerTotal= playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $("#finalTotal").text(playerTotal);
    //Set win or lose condition
    if (playerTotal === randomNumber) {
        hooray();
    }
    else if (playerTotal > randomNumber) {
        loser();
    }
})
//Setting up the click to gem 3
$("#three").on('click', function() {
    playerTotal= playerTotal + num3;
    console.log("New playerTotal=" + playerTotal);
    $("#finalTotal").text(playerTotal);
    //Set win or lose condition
    if (playerTotal === randomNumber) {
        hooray();
    }
    else if (playerTotal > randomNumber) {
        loser();
    }
})
//Setting up the click to gem 4
$("#four").on('click', function() {
    playerTotal= playerTotal + num4;
    console.log("New playerTotal=" + playerTotal);
    $("#finalTotal").text(playerTotal);
    //Set win or lose conditions
    if (playerTotal === randomNumber) {
        hooray();
    }
    else if (playerTotal > randomNumber) {
        loser();
    } 
});
});