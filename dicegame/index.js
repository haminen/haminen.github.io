
var d1 = Math.floor(Math.random() * 6)+1;
var d2 = Math.floor(Math.random() * 6)+1;

var d1link = "./images/dice"+d1+".png";
var d2link = "./images/dice"+d2+".png";

document.querySelector(".img1").setAttribute("src",d1link);
document.querySelector(".img2").setAttribute("src",d2link);

if (d1 > d2){
    document.querySelector("h1").textContent="Player 1 wins!";
}else if (d2 > d1){
    document.querySelector("h1").textContent="Player 2 wins!";
}else if (d2 === d1){
    document.querySelector("h1").textContent="Draw!";
}