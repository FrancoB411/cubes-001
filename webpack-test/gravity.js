
var position;
var acc = 15;
var vel = 0.5;
var particle1;
var particle2;
var attractor;
var noiseSeed;
var width, height;

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  attractor = new Attractor(width/2, height/2, 50);
  particle1 = new Particle(width*(1/3), height/2, 1/2);
  particle2 = new Particle(width*(2/3), height/2, 5);
  universe = new Universe(width, height);
  universe.addObjects([particle1, particle2]);
  console.log(universe.objects);
}

function draw() {
  background(4, 58, 74);

  var force1 = attractor.calculateAttraction(particle1);
  var force2 = attractor.calculateAttraction(particle2);

  particle1.applyForce(force1);
  particle2.applyForce(force2);
  particle1.display();
  particle2.display();
  attractor.display();
}

function mousePressed() {
  // Wind is not scaled by mass
  var wind = createVector(0.5, 0);
  particle1.applyForce(wind);
  particle2.applyForce(wind);
}

