//for player 1
var randomNo1 = Math.floor((Math.random() * 6)) + 1;
var srcImg1 = "./images/dice" + randomNo1 + ".png";
document.querySelector(".img1").setAttribute("src", srcImg1);

//for player 2
var randomNo2 = Math.floor((Math.random() * 6)) + 1;
var srcImg2 = "./images/dice" + randomNo2 + ".png";
document.querySelector(".img2").setAttribute("src", srcImg2);

//Result of the game
if(randomNo1 > randomNo2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(randomNo1 < randomNo2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "It's a Draw!";
}