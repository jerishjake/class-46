let ground;
let lander;
var lander_img;
var bg_img;
var vx = 0;
var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  ground = createSprite(500,690,1000,20)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;

  var d = dist(lander.position.x,lander.position.y,ground.position.x,ground.position.y)
  //console.log(d)
  if(d <= 50 && (vy < 2 && vy > -2 )&& (vx < 2 && vx > -2) ){
   vx = 0;
   vy = 0;
   g = 0;
   console.log("landed");
  }

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
   // lander.changeAnimation('thrusting');
   // thrust.nextFrame();
    
  }
  if(keyCode==RIGHT_ARROW)
  {
    right_thrust();

    
  }
  if(keyCode==LEFT_ARROW)
  {
    left_thrust();
    
    
  }


}

function upward_thrust()
{
  vy = -1;
}

function right_thrust(){
  vx += 0.2
}

function left_thrust(){
  vx -= 0.2
}
