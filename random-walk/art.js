var position;
var acc = 15;
var vel = 0.5;
var walker;
var noiseSeed;


function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  walker = new Walker();
  noiseSeed = 0;
  background(4, 58, 74);
}


function draw() {
  walker.display().update();
}


function randomColor() { 
  return noise(noiseSeed * random(0, 0.01)) * 255; 
}

function Walker() {
  this.position = createVector(width/2, height/2);
  this.velocity = createVector(0, 0);

  this.display = function() {
    fill(randomColor(), randomColor(), randomColor());
    noStroke();
    ellipse(this.position.x, this.position.y, 50, 50);
    return this;
  }

  this.update = function() {
    var mousePosition = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mousePosition, this.position);
    this.acceleration.setMag(0.01);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    noiseSeed += 0.1;
    return this;
  }

  this.resetPosition = function() {
    this.position = createVector(width/2, height/2);
  }
}


// reset walker when mouse is pressed
function mousePressed() {
  walker.resetPosition();
}

