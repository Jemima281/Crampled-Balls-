
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var button

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}


	Engine.run(engine);
	ground = new Ground(width/2, 670, width, 20)
	leftSide = new Ground(600, 600, 20, 120)
	rightSide = new Ground(700, 600, 20, 120)

    button = createImg("button.png")
	button.mouseClicked(V_force)
	button.mouseClicked(H_force)
	button.position(100,50)
	button.size(50,50)

	ball = Matter.Bodies.circle(0,70,60,60, options);
	World.add(world,ball);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  ground.display()

  leftSide.display()

  rightSide.display()

  Engine.update(engine)
  ellipse(ball.Body.position.x, ball.Body.position.y, 50, 50)
  drawSprites();

 
}


function H_force() {
	Matter.Body.applyForce(ball, {x: 0,y: 0}, {x: 0.05, y: 0})
   
   }
function V_force() {
	 Matter.Body.applyForce(ball, {x: 0,y: 0}, {x: 0, y: -0.05})
	
}
