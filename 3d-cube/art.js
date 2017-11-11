var speed = 0.01;
var numCubes = 12;

function setup(){
    createCanvas(displayWidth, displayHeight, WEBGL);
}

function draw(){
    background(250);
    normalMaterial();
  for(var c = 0; c < numCubes; c++) {
    rotateX(frameCount * speed);
    rotateY(frameCount * speed);
    box(100 * c, 100, 100); 
  }
}
