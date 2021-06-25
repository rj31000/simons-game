var pattern= [];
var buttoncolor=["red","blue","green","yellow"];
var userpattern= [];
var level=0;
var started= false;
$(".btn").click(function(){
  if(started){
  var usercolor=$(this).attr("id");
  userpattern.push(usercolor);
  playsound(usercolor);
  animate(usercolor);
  checkAnswer(userpattern.length-1);
}
else
started=true;});
function nextsequence()
{

  userpattern = [];
  level++;
  $("#level-title").text("level  " + level);
  var n=Math.random();
  n=n*4;
  n=Math.floor(n);
  var randomcolor=buttoncolor[n];
  pattern.push(randomcolor);
  $("#" + randomcolor).fadeOut(100).fadeIn(100);
  playsound(randomcolor);
  animate(randomcolor);

}
function checkAnswer(currentLevel) {


    if (pattern[currentLevel] === userpattern[currentLevel]) {


      if (userpattern.length === pattern.length){


        setTimeout(function () {
          nextsequence();
        }, 700);

      }

    }
    else
    {
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 600);
      var audio= new Audio("sounds/" + "wrong" + ".mp3");
      audio.play();
      $("#level-title").text("Game Over , Press any key to continue");
      startover();
    }

}

function playsound(color){
  var audio= new Audio("sounds/" + color + ".mp3");
  audio.play();
}
function animate(color)
{
  $("#" + color).addClass("pressed");
  setTimeout(function(){
    $("#" + color).removeClass("pressed");
  }, 100);
}
$(document).click(function()
{
  if(!started)
  {

    nextsequence();
    started= true;

  }

});
function startover()
{
  pattern = [];
  started = false;
  level=0;
}
