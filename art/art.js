var maxCircleSize = 20;
var phase = 0;
var speed = 0.03;
var numRows = 10;
var numCols = 15;
var numStrands = 2;


function setup() {
  createCanvas(500, 500);
  noStroke();
  colorA = color(253, 174, 120);
  colorB = color(226, 129, 161);
}

function draw() {
  background(4, 58, 74);
  var phase = frameCount * speed;

  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    for(var col = 0; col < numCols; col += 1) {
      for(var row = 0; row < numRows; row += 1) {
        var colOffset = map(col, 0, numCols, 0, TWO_PI);
        var x = map(col, 0, numCols, 50, width - 50);
        var y = height/2 + row * 18 + sin(strandPhase + colOffset) * 50 -75;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}

// reset board when mouse is pressed
function mousePressed() {
}

