// Newton's second law: F = M * A
// where:
// F: Force
// M: Mass
// A: Acceleration

export default function Particle( s ) {
  return function(x, y, mass) {
    this.position = s.createVector(x, y);
    this.velocity = s.createVector(0, 5);
    this.acceleration = s.createVector(0, 0);
    this.mass = mass;
    this.radius = massToRadius(mass);

    this.display = function() {
      s.noStroke();
      s.ellipse(this.position.x, this.position.y, this.radius, this.radius);
      this.position.add(this.velocity.add(this.acceleration));
      this.constrainToUniverse();
      this.acceleration.set(0,0);
      this.update();
      return this;
    }

    this.update = function() {
      var mousePosition = s.createVector(s.mouseX, s.mouseY);
      return this;
    }

    this.resetPosition = function() {
      this.position = s.createVector(width/2, height/2);
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
  };
}
