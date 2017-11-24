var speed = 0.01;
var numCubes = 12;

console.log("I exist");

if (feature.canvas && feature.webGL) {
    console.log("good to go")
} else {
  var body = document.querySelector("body");
  var h1 = document.createElement('h1');
  h1.innerText ="WebGl Support Required"
  body.appendChild(h1);
}

function setup(){
  var width = window.innerWidth;
  var height = window.innerHeight;
    createCanvas(width, height, WEBGL);
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
