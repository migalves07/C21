const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon
var balls = [];
var score = 0;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {

  angleMode(DEGREES)
  angle = 15
  
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);

  
}



function draw() {
  
  console.log(balls)
  //imagem do background
  background(200)
  image(backgroundImg, 0, 0, width, height);
  
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
  
  for (var i = 0; i < balls.length; i++){
    exibir(balls[i])
  }
  cannon.display();
}

function keyPressed(){
  
  if(keyCode == DOWN_ARROW){
   var cannonball = new cannonBall(cannon.x,cannon.y)
    cannonball.trajetoria = []
   Matter.Body.setAngle(cannonball.body,cannon.angle)
   balls.push(cannonball)
  }
}
function exibir(ball){
  if(ball){
    ball.display()
  }
}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
   balls[balls.length - 1].atirar()
   
  }
}