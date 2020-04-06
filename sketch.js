
var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var ci;



function preload()
{
ci=loadImage("cloud.png");
}

function setup() {
createCanvas(400, 400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);






}



function draw() {

background("#354B72");
imageMode(CENTER);






if(frameCount%1===0)
{
    
    boxes.push(new Box(random(0,400),-1,1,PI*4));
   
}
if(frameCount%1===0)
{
    
    boxes.push(new Box(random(0,400),-1,0.8,PI*4));
   
}
if(frameCount%1===0)
{
    
    boxes.push(new Box(random(0,400),-1,0.6,PI*4));
   
}
if(frameCount%1===0)
{
    
    boxes.push(new Box(random(0,400),-1,0.5,PI*4));
   
}

for (var i = 0; i < boxes.length; i++) {
    
    boxes[i].display();
}
image(ci,200,10,200,100);
image(ci,100,10,200,100);
image(ci,10,10,200,100);
image(ci,350,10,200,100);

image(ci,200,39,200,100);
image(ci,100,55,200,100);
image(ci,10,40,200,100);
image(ci,350,49,200,100);

}

