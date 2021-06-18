var ball1Img,ball2Img,ball3Img,ball4Img,ball5Img,ball6Img;
 var ball1;

 
function preload(){
    ball1Img = loadImage("ball1.jpg");
    ball2Img = loadImage("ball2.jpg");
    ball3Img = loadImage("ball3.jpg");
    ball4Img = loadImage("ball4.jpg");
    ball5Img = loadImage("ball5.jpg");
    ball6Img = loadImage("ball6.jpg");
     
}

function setup() {
    createCanvas(windowWidth, windowHeight);

 

}

function draw() {
background ("black");
drawSprite();
createball();

   
}

function createball() {
   ball1 = createSprite(100,Math.round(random(20, 370)), 100, 100);
  ball1.addImage(ball1Img);
  ball1.velocityX = 3;
  ball1.scale = 0.5;

}
