var bgImage,shipImage,ship
function preload(){
  bgImage=loadImage("sea.png")
  shipImage=loadImage("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
}

function setup(){
  createCanvas(400,400);
  bg=createSprite(200,200);
  ship=createSprite=(200,200);
  bg.addImage("bg",bgImage)
 bg. scale=0.3
 ship.addImage("ship",shipImage)

}

function draw() {
  background("blue");
  ship.velocityX = -3
if (sea.x< 0) {
 sea.x = sea. width/2; 
}




 drawSprites()
}