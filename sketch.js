const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){

    //created canvas
    createCanvas(400,400);

    //created physics engine in physical world
    engine = Engine.create();
    world = engine.world;
    var ball_options={
        restitution:1.0
    }
     ball=Bodies.circle(200,100,20,ball_options);
     World.add(world,ball);
     var object_options={
         isStatic:true
     }
     
object = Bodies.rectangle(200,100,50,50,object_options);
World.add(world,object);

console.log(object.position.y)

}

function draw(){
    background("black");
  Engine.update(engine);
  ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
//created rectangle
    rectMode(CENTER);
    rect(object.position.x,object.position.y,200,20);

   
}