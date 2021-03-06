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
  universe = new Universe(width, height);
  universe.addObject(particle1);
  universe.addObject(particle2);
  noiseSeed = 0;
  console.log(universe.objects);
  console.log(particle2.constraints);
}

function draw() {
  background(4, 58, 74);

  // Gravity is scaled according to mass
  var gravity1 = createVector(0, 0.1*particle1.mass);
  var gravity2 = createVector(0, 0.1*particle2.mass);


  particle1.applyForce(gravity1);
  particle2.applyForce(gravity2);
  particle1.display();
  particle2.display();
}

function randomColor() { 
  return noise(noiseSeed * random(0, 0.01)) * 255; 
}

function mousePressed() {
  // Wind is not scaled by mass
  var wind = createVector(0.5, 0);
  particle1.applyForce(wind);
  particle2.applyForce(wind);
}

