
function Particle() {
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
