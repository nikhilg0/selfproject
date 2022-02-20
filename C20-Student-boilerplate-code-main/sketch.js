//lava blueprint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lava
let engine;
let world;
var ball;
var collision 
var ground1;
var ground2
var ground3
var button
var wall
var ceiling
var angle = 180
var fall
var gameState = 0
var restriction
var PLAY = 0
var END=3

function setup() {
  createCanvas(windowWidth,windowHeight-5);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
  ball = Bodies.circle(70,40,20,ball_options);
  World.add(world,ball)

  var button_options ={
    isStatic: false,
   restitution: 3,
   density:111,
   frictionAir:0.1
  };
  button = Bodies.rectangle(20,340,20,100,button_options);
  World.add(world,button)

  var fall_options ={

    isStatic : true
  };
fall = Bodies.rectangle(800,340,100,40,fall_options);
 World.add(world,fall)
  
 ground1 = new Ground(250,390,1000,20)
  ground2 = new Ground(1225,390,750,20)
  ground3 = new Ground(800,430,100,20)
  wall = new Ground(350,330,20,100)
  ceiling = new Ground(800,0,20,500)
 


 
  restriction = new Ground(5,300,10,100)
 
 
  
 

 
  lava = new Lava(1,500,10,5000)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(4);
  Engine.update(engine);
  push()
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20);
pop()
  ground1.display()
  ground2.display()
  ground3.display()
  wall.display()
  ceiling.display()
 
  restriction.display()
  rect(button.position.x,button.position.y,20,100); 
 rect(fall.position.x,fall.position.y,100,40)
 lava.display()
collision = Matter.SAT.collides(ball,fall)
if (collision.collided){
  Matter.Body.setStatic(fall,false)
  console.log("collided")
}
//Matter.Body.setVelocity(lava,{x:1,y:0})
if (gameState === 0 && ball.position.x>= 1500){
  console.log("win")
  gameState === 1
  }

if (gameState === 1){
 

}
collision2 = Matter.SAT.collides(wall.body,ball)
if(collision2.collided){
Matter.body.setVelocity(lava.body,{x:0,y:0})
}
Matter.Body.setVelocity(lava.body,{x:1,y:0})
}

function keyPressed() {
  

  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:0})
  }

  if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:0})
  }

  

}



  