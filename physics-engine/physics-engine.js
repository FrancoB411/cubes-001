var position;
var acc = 15;
var vel = 0.5;
var particle;
var noiseSeed;

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  particle = new Particle();
  noiseSeed = 0;
}

function draw() {
  background(4, 58, 74);
  var gravity = createVector(0, 0.1);
  var wind = createVector(0.2, 0);
  particle.applyForce(gravity);
  particle.applyForce(wind);
  particle.display();
  particle.update();
}

function randomColor() { 
  return noise(noiseSeed * random(0, 0.01)) * 255; 
}

function mousePressed() {
  particle.resetPosition();
}

