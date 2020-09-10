
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, mangoObject,groundObject, boyObject
//var mangoObj;	
var world;
var launchingForce=100;
var lastMouseX=null;
var lastMouseY=null;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//mangoObj =new mango(1200,670,70);
	mangoObject=new mango(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	treeObj=new tree(1200,650);
	//powerdisp=new powerdisplay(200,200,100);
	boyObject=new boy(mangoObject.body,{x:300,y:300})
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  Engine.update(engine)
  
  mangoObject.display();
	
  
  groundObject.display();
  treeObj.display();
  //powerdisp.display(launchingForce);
  boyObject.display();
  
 
  
  
 
}


function mouseDragged()
{
	Matter.Body.setPosition(mangoObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	boyObject.fly();
 
}







