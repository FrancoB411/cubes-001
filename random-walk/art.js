var position;
var magnitude = 5;

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  position = createVector(width/2, height/2);
}

function draw() {
  background(4, 58, 74);
  var velocity = createVector(random(-magnitude, magnitude), random(-magnitude, magnitude));
  position = position.add(velocity);
  fill(204, 102, 0);
  stroke(0);
  ellipse(position.x, position.y, 50, 50);

}


// reset board when mouse is pressed
function mousePressed() {
}

