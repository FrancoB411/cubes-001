var position;
var acc = 15;
var vel = 1;

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  resetPosition();
}


function draw() {
  background(4, 58, 74);
  var velocity = createVector(random(-vel, vel), random(-vel, vel));
  var acceleration = createVector(random(-acc, acc), random(-acc, acc));
; 
  position = position.add(velocity.add(acceleration));
  fill(204, 102, 0);
  stroke(0);
  ellipse(position.x, position.y, 50, 50);

}


// reset board when mouse is pressed
function mousePressed() {
  resetPosition();
}

function resetPosition() {
  position = createVector(width/2, height/2);
}

