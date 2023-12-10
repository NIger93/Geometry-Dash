let player = new Image();
let spike = new Image();
let background = new Image();

player.src = "./images/player.png"
spike.src = "./images/spike.png"
background.src = "./images/background.png"

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d")

canvas.width = 1024;
canvas.height = 512;

let xPos = 100
let yPos = 0
let gravity = 5
let velY = yPos
let bgX = 0;

setInterval(() => {
    ctx.drawImage(background, bgX, 0, 1024, 512);
    ctx.drawImage(background, 1024 + bgX, 0, 1024, 512);
    ctx.drawImage(player, xPos, yPos, 50, 50);

   if(bgX <= -1024){
    bgX = 0;
   } 
    
    if (yPos >= canvas.height - 50) {

    } else {
        velY += gravity
        yPos = velY
    }

}, 33);
canvas.addEventListener("click", () => {
if(yPos >= canvas.height - 50){
    jumpState = true;
}
});





