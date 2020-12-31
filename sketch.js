var wall ,thickness ;

var bullet,speed , weight;




function setup() {
  createCanvas(1600,800);

  speed=random(55,90);
  weight=random(400,1500);
thickness=random(22,83);

bullet=createSprite(50, 200, 50, 5);
bullet.velocityX=speed;
bullet.shapeColor="white";

wall=createSprite(1200,250,thickness,height/2);
wall.shapeColor="grey";
}

function draw() {
  background(0);  
  
  
    
    
    if(hascollided(bullet,wall))
    {
      bullet.velocityX=0;
      var Damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   if(Damage>10)
   {
     wall.shapeColor="red"
   }
   if(Damage<10)
   {
     wall.shapeColor="green"
   }
  }

  
  drawSprites();
}
function hascollided(lbullet,lwaLL)
{

 
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge=lwaLL.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;


}