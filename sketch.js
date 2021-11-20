
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine, world;
var ground1, ground2, ground3;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.0
	}
	ball=Bodies.circle(260,100,20, ball_options)
    World.add(world,ball);

    
	ground1=new Ground(width/2, 670, width, 20)
	ground2=new Ground(1100, 600, 20, 120)
	ground3=new Ground(1350, 600, 20, 120)
	Engine.run(engine)
}
function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85, y:-85} )
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y, 20,20)
  ground1.show()
  ground2.show()
  ground3.show()
}



