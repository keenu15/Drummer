for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

//make sound when clicked
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

  //make sound when the key is pressed
      document.addEventListener("keydown",function(key){
        sound(event.key);
        buttonAnimation(event.key);
      })
}


function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var tom5 = new Audio('snare-1.mp3');
      tom5.play();
      break;

    case "k":
      var tom6 = new Audio('crash-1.mp3');
      tom6.play();
      break;

    case "l":
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentkey) {
  var activebutton = document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function (){
  activebutton.classList.remove("pressed");
},100);
}
