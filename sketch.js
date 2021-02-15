var movingRect, fixedRect;
var car,wall;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,100,50,100);
  fixedRect=createSprite(600,200,50,100);
car=createSprite(100,700,50,50);
wall=createSprite(1000,700,50,100);
car.shapeColor="yellow";
wall.shapeColor="blue";
  movingRect.shapeColor="red";
  
  fixedRect.shapeColor="red";

  movingRect.debug=true;
  fixedRect.debug=true;
  car.velocityX=3;
  
  
}

function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
if(isTouching(car,wall)){
  car.shapeColor="blue";
}
else{
  car.shapeColor="yellow";
}

//bounceOff(car,wall);

  rectMode (CENTER);
  rect (200,200,50,50);
  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object2.y<object2.height/2+object1.height/2){
    return true;
  }
  else{
   return false;
  }



}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
      && object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
      }
}