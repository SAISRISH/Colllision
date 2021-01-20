var fixedRect1,fixedRect2,fixedRect3, movingrect;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,fixedRect2)){
    movingrect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
else{
  movingrect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
}
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}