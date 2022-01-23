const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var bottomWall, topWall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  bottomWall = new Wall(200, 390, 400, 20);
  topWall = new Wall(200, 10, 400, 20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottomWall.display();
  topWall.display();

}

