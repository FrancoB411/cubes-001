
// Newton's second law: F = M * A
// where:
// F: Force
// M: Mass
// A: Acceleration

function Particle(x, y, mass) {
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;

  this.display = function() {
    noStroke();
    ellipse(this.position.x, this.position.y, 50, 50);
    this.position.add(this.velocity.add(this.acceleration));
    this.edges();
    this.acceleration.set(0,0);
    this.update();
    return this;
  }

  this.update = function() {
    var mousePosition = createVector(mouseX, mouseY);
    return this;
  }

  this.resetPosition = function() {
    this.position = createVector(width/2, height/2);
  }

  this.applyForce = function(force) {
    force = force.copy();
    force.div(mass);
    this.acceleration.add(force);
  }

  this.edges = function() {
    if (this.position.x > width) { 
      this.velocity.x *= -1;
      this.position.x = width;
    }

    if (this.position.y > height) { 
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}
