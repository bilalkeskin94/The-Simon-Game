let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let toggle = false;
$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});
$(document).keypress(function () {
  if (!toggle) {
    nextSequence();
    toggle = true;
  }
});
function nextSequence() {
  userClickedPattern = [];
  level++;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#level-title")
    .on("click")
    .text("Level" + " " + level);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
  } else {
    console.log("error");
  }
  if (gamePattern.length === userClickedPattern.length) {
    console.log("Length eşit");
    setTimeout(function () {
      nextSequence();
    }, 1000);
  } else {
    console.log("Error with the game");
  }
}
