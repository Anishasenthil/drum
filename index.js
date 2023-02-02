//detecting button press
var drumnumber=document.querySelectorAll(".drum").length;
for(var i =0; i<drumnumber;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var alphabet=this.innerHTML;
    sounds(alphabet);
    buttonanimate(alphabet);
  });

}
//detecting keyboard press
document.addEventListener("keydown",function(event){
  sounds(event.key);
  buttonanimate(event.key);
})
//main sound function
function sounds(key){
  switch (key) {

    case "w":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
      break;
    case "a":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
      break;
      case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
      case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
      case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
      case "k":
            var snar = new Audio("sounds/snare.mp3");
            snar.play();
        break;
      case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    default:

  }
}

//addind animation

function buttonanimate(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  //aftr 0.1 sec the opacity of the pressed class will be removed
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed")
  },100)
}
