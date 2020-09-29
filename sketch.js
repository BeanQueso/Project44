const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg, tower, stone, towerImg, pole, canonImg, canon, king, kingImg;
var score = 0;
var blob;
function preload(){
  towerImg = loadImage("sprites/Castle.png");
  canonImg = loadImage("sprites/Canon.png");
  kingImg = loadImage("sprites/king.png");
}
function setup() {
  
  createCanvas(1400,670);
 engine = Engine.create();
 world = engine.world;
  ground  = new Ground(700, 655, 1400, 55);
 

  stone = new Stone(1090,130,50);

  sling = new SlingShot(stone.body, {x:1090,y:90});



  canon = createSprite(1090, 170, 10,10);
  canon.addImage("canon", canonImg);
  canon.scale = 0.2;

  king = createSprite(1200, 90, 10, 10);
  king.addImage("king", kingImg);
  king.scale = 0.1;

  //tower = new Tower(1200, 390, 600, 620);
  
  

}

function draw() {

  Engine.update(engine);
  background(0);
  text("SCORE:" +score,700, 40);
  ground.display();
 
  stone.display();
  sling.display();

 
  //tower.display();

  image(towerImg, 900, 90);


  drawSprites();
  Blobs();
 


}
function mouseDragged(){
    
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
sling.fly();

}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(stone.body, {x:1090, y: 130});
     sling.attach(stone.body);
  }
}
function Blobs(){
  if(frameCount%100===0){
    blob = new Box(0, 600);
    blob.body.position.x++;
    blob.display();
  }
}
