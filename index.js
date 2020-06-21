let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[nextSequance()];
gamePattern.push(randomChosenColor);

function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);

  return randomNumber;
}

$(document).ready(function () {
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
});

$(document).ready(function () {
  $(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    let audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
  });
});
function animatePress(currentColor) {
  $(".btn").click(function () {
    $(".btn").addClass("pressed");
  });
}
