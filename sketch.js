var moving;
var fixed;

function setup() {
  createCanvas(800,400);
  moving=createSprite(200, 200, 50, 50);
  moving.shapeColor=("skyblue");
  fixed=createSprite(400,200,50,50);
  fixed.shapeColor=("skyblue");
}

function draw() {
  background("orange");  
 
  moving.x=mouseX;
  moving.y=mouseY;
  
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2) {

    fixed.shapeColor=("red");
    moving.shapeColor=("red");
  }

  else {

    fixed.shapeColor=("pink");
    moving.shapeColor=("pink");

  }



  drawSprites();
}