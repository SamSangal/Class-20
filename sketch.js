var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(300,300,80,30);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}


function draw() {
  background(255,0,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width+fixedRect.width/2 && 
      fixedRect.x-movingRect.x<movingRect.width+fixedRect.width/2 && 
      movingRect.y-fixedRect.y<movingRect.width+fixedRect.width/2 && 
      fixedRect.y-movingRect.y<movingRect.width+fixedRect.width/2){
        fixedRect.shapeColor="red";
        movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}