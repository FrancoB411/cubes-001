
// Newton's second law: F = M * A
// where:
// F: Force
// M: Mass
// A: Acceleration

// Gravity
// Fg = m1 * m1*G / distance^2
// where:
// Fg: Gravity
// m1: mass 1 object
// m2: mass 2 object
// distance: distance between the two objects

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
    this.constrainToUniverse();
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

  this.applyUniverse = function(constraints) {
    this.constraints = constraints;
  }

  this.constrainToUniverse = function() {
    var leftEdge = this.constraints.leftEdge + this.radius/2;
    var rightEdge = this.constraints.rightEdge - this.radius/2;
    var bottomEdge = this.constraints.bottomEdge - this.radius/2;
    var topEdge = this.constraints.topEdge + this.radius/2;

    if (this.position.x > rightEdge) { 
      reverse(this.velocity, "x");
      this.position.x = rightEdge;
    }

    if (this.position.x < leftEdge) { 
      reverse(this.velocity, "x");
      this.position.x = leftEdge;
    }

    if (this.position.y > bottomEdge) { 
      reverse(this.velocity, "y");
      this.position.y = bottomEdge; 
    }

    if (this.position.y < topEdge) { 
      reverse(this.velocity, "y");
      this.position.y = topEdge; 
    }
  }

  function massToRadius(mass) {
    // Volume of a circle: V = pi*r^3
    // let V = mass so we have a constant density 
    // derives radius based on volume
    // Multiply by 50 so it looks reasonable in a browser
    return Math.cbrt(1/(((4/3)*Math.PI)/mass))*50;
  }

  function reverse(vector, axis) {
    vector[axis] *= -1;
  }
}

function Aattractor(x, y, mass) {
  this.position = createVector(x, y);
}

