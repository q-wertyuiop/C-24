
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper1,dustbin;

function preload()
{

	
  
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(450,340,900,20);
  dustbin = new Dustbin(700,300);
  paper1 = new Paper(200,200,40);
	


	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  
  keyPressed();
  ground.display();
  paper1.display();
  dustbin.display();
  
  
  
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-20});
  }

}


