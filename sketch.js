const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies
var engine1, world1 ;
var ground1;
var paper1;
var dustbin1, dustbin2, dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine1 = engine.create();
	world1 = engine1.world ;

	ground1= new Ground(800,670,1600,20);
	
	//paper
	paper1 = new paper(200,450,30);

	//dustbin
	dustbin1 = new dustbin(1050,666,150,20);
	
	dustbin2 = new dustbin(1000,630,20,150);
	
	dustbin3 = new dustbin(1100,630,20,150);
	

	
}


function draw() {
	background(10); 
	engine.update(engine1); 
  
  ground1.display();
 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


