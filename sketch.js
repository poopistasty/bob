
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

bob=new Bob(200,450);
bob2=new Bob(120,460);
bob3=new Bob(280,420);
roof=new Ground(400,50,700,50);
rope1=new Rope(bob.body,roof.body,-20,25);
rope2=new Rope(bob2.body,roof.body,-150,25);
rope3=new Rope(bob3.body,roof.body,110,25);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
 roof.display();
 bob.display();
 rope1.display();
 bob2.display();
 rope2.display();
 bob3.display();
 rope3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,{x:50,y:-50})
	}
}

