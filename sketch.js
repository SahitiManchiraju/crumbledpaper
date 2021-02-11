
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var Dustbin1, Dustbin2, Dustbin3;
var paper1;
var ground1;
var bin


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  Dustbin1 = new Dustbin(1100,370,200,20);
  //Dustbin2 = new Dustbin(740,340,20,100);
  //Dustbin3 = new Dustbin(950,340,20,100);
 
  
  paper1 = new Paper(50,388,70);
  ground1 = new Ground(350,395,1800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  Dustbin1.display();
 // Dustbin2.display();
 // Dustbin3.display();
  paper1.display();
  ground1.display();
  drawSprites();

}

function keyPressed(){
  if (keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:190,y:-205})
   
  }
}

