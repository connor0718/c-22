

const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var world,engine,ground;
var ball
function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var option={
      isStatic:true
  }

  ground=Bodies.rectangle(200,380,350,20,option);
  World.add(world,ground);
  var op={
    restitution:1.0
  }
ball= Bodies .circle( 200,100,20,op)
  World.add(world,ball)

}

function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,350,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();;
}

