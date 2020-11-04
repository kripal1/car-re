var car,wall;

var speed,weight;


function setup() {
  createCanvas(1200,800);
  car=createSprite(100, 400, 50, 50);
  car.shapeColor="green";
  wall=createSprite(1000, 300, 60, height/2);
  wall.shapeColor="white";

  speed=random(50,100);
  weight=random(900,1500);
}
function draw() {
  background(0);  
car.velocityX=speed


  drawSprites();
}

// function isTouching()
// if (car.x-wall.x<car.width/2+wall.width/2 &&
//   wall.x-car.x<car.width/2+wall.width/2 &&
//   car.y-wall.y<car.height/2+wall.height/2 && 
//   wall.y-car.y<car.height/2+wall.height/2
//   )
//   {
// if (deformation=0.5*weight*speed*speed/22500 <80)
// car.shapeColor="green";
// }
// else{
//   car.shapeColor="red";
// }






