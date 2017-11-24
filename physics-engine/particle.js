
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
  this.radius = massToRadius(mass);

  this.display = function() {
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
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
    if (this.position.x > width - this.radius/2) { 
      this.velocity.x *= -1;
      this.position.x = width - this.radius/2;
    }

    if (this.position.y > height - this.radius/2) { 
      this.velocity.y *= -1;
      this.position.y = height - this.radius/2;
    }
  }

  function massToRadius(mass) {
    // Volume of a circle: V = pi*r^3
    // let V = mass so we have a constant density 
    // derives radius based on volume
    // Multiply by 50 so it looks reasonable in a browser
    return Math.cbrt(1/(((4/3)*Math.PI)/mass))*50;
  }
}
