// Gravity
// Fg = m1 * m1*G / distance^2
// where:
// Fg: Gravity
// m1: mass 1 object
// m2: mass 2 object
// distance: distance between the two objects

function Attractor(x, y, mass) {
  this.position = createVector(x, y);
  this.mass = mass;
  this.G = 3 ;

  function forceDirection(p1, p2) {
    return p5.Vector.sub(p1, p2);
  }

  this.calculateAttraction = function(m) {
    var force = forceDirection(this.position, m.position );

    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    // Calculate gravitional force magnitude  
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  };

  this.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    fill(175, 200);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
  };


  function gravity(m1, m2) {
  }
}

