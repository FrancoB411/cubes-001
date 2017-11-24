var position;
var acc = 15;
var vel = 0.5;
var particle1;
var particle2;
var noiseSeed;

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  particle1 = new Particle(width*(1/3), height/2, 1/2);
  particle2 = new Particle(width*(2/3), height/2, 20);
  noiseSeed = 0;
}

function draw() {
  background(4, 58, 74);
  var gravity1 = createVector(0, 0.1*particle1.mass);
  var gravity2 = createVector(0, 0.1*particle2.mass);
  var wind = createVector(0.1, 0);
  particle1.applyForce(gravity1.add(wind));
  particle2.applyForce(gravity2.add(wind));
  particle1.display();
  particle2.display();
}

function randomColor() { 
  return noise(noiseSeed * random(0, 0.01)) * 255; 
}

function mousePressed() {
  particle1.resetPosition();
  particle2.resetPosition();
}

