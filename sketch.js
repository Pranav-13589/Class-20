
var fixedRect;
var moveRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,150,130,100);
  fixedRect.shapeColor = "green" 
  moveRect = createSprite(100,100,100,40)
  moveRect.shapeColor = "green"
}

function draw() {
  background(0);
  moveRect.x = mouseX;
  moveRect.y = mouseY;
    if(fixedRect.x - moveRect.x < fixedRect.width/2+moveRect.width/2 &&
      moveRect.x - fixedRect.x < fixedRect.width/2+moveRect.width/2 &&
      fixedRect.y - moveRect.y < fixedRect.height/2+moveRect.height/2 &&
      moveRect.y - fixedRect.y < fixedRect.height/2+moveRect.height/2){
        fixedRect.shapeColor = "red"
        moveRect.shapeColor = "red"
    }
    else{
      fixedRect.shapeColor = "green"
      moveRect.shapeColor = "green" 
    } 

  drawSprites();

}