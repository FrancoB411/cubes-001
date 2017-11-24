var position;
var acc = 15;
var vel = 0.5;
var particle;
var noiseSeed;

console.log("I exist");

if !(feature.canvas && feature.webGL) {
    console.log("Canvas and WebGL are NOT supported")
} else {
    console.log("good to go")
}

function setup() {
  height = window.innerHeight;
  width = window.innerWidth;
  createCanvas(width, height);
  particle = new Particle();
  noiseSeed = 0;
  background(4, 58, 74);
}


function draw() {
  particle.display().update();
}


function randomColor() { 
  return noise(noiseSeed * random(0, 0.01)) * 255; 
}



// reset walker when mouse is pressed
function mousePressed() {
  particle.resetPosition();
}

