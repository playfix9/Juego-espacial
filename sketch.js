let ground;
let lander;
var lander_img;
var bg_img;
var fondo;

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("1866.jpg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  fondo = createSprite(width/2,height/2,width,height);
  fondo.addImage(bg_img);
  fondo.scale=0.248;

  lander = createSprite(500,650,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.15;
  lander.setCollider("rectangle",0,0,200,200)
  lander.debug=true;
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);

  shipsSpawn();

  if(keyDown("a"))
  {
  lander.x-=8;
  }


  if(keyDown("d"))
  {
   lander.x+=8;
    
  }



  drawSprites();

  push()
  fill(255);
  textFont("rubikreg");
  textSize(30);
  text("Vertical Velocity: ",1150,60);
  pop();

}

function shipsSpawn(){
if (frameCount%100==0){
var enemie1 = createSprite(150,-60);
enemie1.x=Math.round(random(30,1430));
enemie1.debug=true;
enemie1.velocityY=1.3;

}



}