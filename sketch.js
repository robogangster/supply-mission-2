var helicopterIMG, helicopterSprite, packageSprite,packageIMG,dustbin1,dustbin2,dustbin3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.63, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	dustbin1=Bodies.rectangle(236,630,20,130);
	World.add(world,dustbin1);
	
	dustbin2=Bodies.rectangle(433,590,20,130);
	World.add(world,dustbin2);
dustbin2.isStatic=true;

dustbin3=Bodies.rectangle(325,670,216,20);
	World.add(world,dustbin3);
	dustbin3.isStatic=true;
//433,555


}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
  fill("red");
  rect(dustbin1.position.x,dustbin1.position.y,20,160);
  rect(dustbin2.position.x,dustbin2.position.y,20,140);
rect(dustbin3.position.x,dustbin3.position.y,216,20);

  //391 633

//236,581


//325,596

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



