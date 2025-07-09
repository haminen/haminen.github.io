//soittofunktio
function playSound(s){
                switch (s){
                
                case "w":
                    var w = new Audio('./sounds/tom-1.mp3');
                    w.play();
                break;
                case "a":
                    var a = new Audio('./sounds/tom-2.mp3');
                    a.play();
                break;
                case "s":
                    var s = new Audio('./sounds/tom-3.mp3');
                    s.play();
                break;
                case "d":
                    var d = new Audio('./sounds/tom-4.mp3');
                    d.play();
                break;
                case "j":
                    var j = new Audio('./sounds/snare.mp3');
                    j.play();
                break;
                case "k":
                    var k = new Audio('./sounds/crash.mp3');
                    k.play();
                break;
                case "l":
                    var l = new Audio('./sounds/kick-bass.mp3');
                    l.play();
                break;
                
                default: console.log(s);
            }

}

function buttonAnimation(currentKey){
    
    //lisätään nappulalle uusi tyyliluokka ja poistetaan se odottelun jälkeen jolloin saadaan luotua efekti että painetti
    var activeButton = document.querySelector("."+currentKey); // valitaan nappula jota muutetaan

    activeButton.classList.toggle("pressed");
    
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    },100);
    
}

//lasketaan rumpunappulat
var numbOfDrumButtons = document.querySelectorAll(".drum").length;

//ajetaan jokaiselle rumpunappulalle eventlistener loopin avulla, viitataan luokkaan .drum
for (var i=0; i < numbOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonTextContent = this.textContent;

        playSound(buttonTextContent);

        buttonAnimation(buttonTextContent);

    });

}

//näppäimistön kuuntelu ja painettaesssa tapahtuma
document.addEventListener("keypress",function(event){

    var pressedKey = event.key;
    playSound(pressedKey);
    buttonAnimation(pressedKey)

});