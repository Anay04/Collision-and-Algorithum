var MovingRect, FixedRect;
var GameObject1, GameObject2;
var GameObject3, GameObject4;


function setup() {
  createCanvas(800,400);
  MovingRect = createSprite(100, 200, 50, 50);
  FixedRect = createSprite(400, 200, 50, 50);
  GameObject1 = createSprite(200, 200, 50, 50);
  GameObject2 = createSprite(100, 300, 50, 50);
  GameObject3 = createSprite(300, 200, 50, 50);
  GameObject4 = createSprite(400, 300, 50, 50);
  GameObject1.shapeColor = "green";
  GameObject2.shapeColor = "green";
  GameObject3.shapeColor = "green";
  GameObject4.shapeColor = "green";
  FixedRect.shapeColor = "green";
  MovingRect.shapeColor = "green";
}

function draw() {
  background("black");  
  MovingRect.x = mouseX;
  MovingRect.y = mouseY;
  
  if(isTouching(MovingRect,GameObject2)) {
    MovingRect.shapeColor = "red";
    GameObject2.shapeColor = "red";
  } else {
    MovingRect.shapeColor = "green";
    GameObject2.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(o1,o2) {
  if((o1.x - o2.x < o1.width / 2 + o2.width / 2) && (o2.x - o1.x < o1.width / 2 + o2.width / 2) && (o2.y - o1.y < o1.height / 2 + o2.height / 2) && (o1.y - o2.y < o1.height / 2 + o2.height / 2)) {
    return true;
} else {
    return false;  
  }  
}

