const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage;
var snows = [];
var engine, world;

function preload() {
  backgroundImage = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
}


function draw() {
  background(backgroundImage);

  if (frameCount % 4 === 0) {
    snows.push(new Snow(random(width / 2 - 700, width / 2 + 700), 10, 10));
  }

  for (var s = 0; s < snows.length; s++) {

    snows[s].display();
  }

  drawSprites();
}