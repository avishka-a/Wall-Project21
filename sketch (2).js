
var car
var wall
var speed,weight

function setup() {
  createCanvas(1200,400);
  

  speed=random(55,90)
  weight=random(400,1500)
    
car=createSprite(50,200,50,50)
car.velocityX=speed;

wall=createSprite(1000,200,6,height/2)
wall.shapeColor='grey'

}

function draw(){
  background(100,100,100);  
  

  if(wall.x-car.x < (car.width/2+wall.width/2)){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180){
  car.shapeColor='red'
}

if(deformation<180 && deformation>100){
  car.shapeColor='yellow'
}

if(deformation<100){

  car.shapeColor='green'
}


  }




  drawSprites();
}