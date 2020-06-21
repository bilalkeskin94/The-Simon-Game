let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[nextSequance()];
gamePattern.push(randomChosenColor);
console.log(gamePattern);
console.log(randomChosenColor);
function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
$(document).ready(function () {
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
});

let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");

  alert(userChosenColor + "is Clicked");
});