$("#d1").click(function(){
    $("#d1").css("border","red 3px solid");
    $("#d2").css("border","red 3px solid");
});
$("#d2").click(function(){
    $("#d1").css("border","red 3px solid");
    $("#d2").css("border","red 3px solid");
});
$("#d3").click(function(){
    $("#d3").css("border","red 3px solid");
    $("#d4").css("border","red 3px solid");
});
$("#d4").click(function(){
    $("#d3").css("border","red 3px solid");
    $("#d4").css("border","red 3px solid");
});
$("#d5").click(function(){
    $("#d5").css("border","red 3px solid");
    $("#d6").css("border","red 3px solid");
});
$("#d6").click(function(){
    $("#d5").css("border","red 3px solid");
    $("#d6").css("border","red 3px solid");
});
$("button").click(function(){
    $(".bor").css("border","transparent 3px solid");

});
window.onload = function() {
   (new Audio('http://66.90.93.122/ost/spongebob-squarepants-supersponge/oeffgcvm/13%20-%20Mother%20Jellyfish.mp3')).play();
};
// Adapted from https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = (new Date().getTime()) + 87000 /* 1 min, 27 sec */;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME'S UP!";
  }
}, 1000);
