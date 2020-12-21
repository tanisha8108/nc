
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5
var slab1;
var rope1, rope2 , rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	pendulum1=new Pendulum(120,300,40,40)
	pendulum2=new Pendulum(140,300,40,40)
	pendulum3=new Pendulum(160,300,40,40)
	pendulum4=new Pendulum(180,300,40,40)
	pendulum5=new Pendulum(200,300,40,40)

	slab1=new slab (150,100,400,40)

	rope1 = new (slab1.body,{x:150, y:100});
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  
	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();
	slab1.display();
	rope1.diaplay();
}



