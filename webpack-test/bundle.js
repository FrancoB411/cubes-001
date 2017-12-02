/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__universe__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particle__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attractor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(4);






console.log("content");
console.log('gravity loaded');

var position;
var acc = 15;
var vel = 0.5;
var particle1;
var particle2;
var attractor;
var noiseSeed;
var width, height, universe;


var sketch = function( s ) {
  var Attractor = Object(__WEBPACK_IMPORTED_MODULE_2__attractor__["a" /* default */])(s);
  var Particle = Object(__WEBPACK_IMPORTED_MODULE_1__particle__["a" /* default */])(s);
  var Universe = Object(__WEBPACK_IMPORTED_MODULE_0__universe__["a" /* default */])(s);

  s.setup = function() {
    height = window.innerHeight;
    width = window.innerWidth;
    s.createCanvas(width, height);

    s.createVector(1,2);
    attractor = new Attractor(width/2, height/2, 50);
    particle1 = new Particle(width*(1/3), height/2, 1/2);
    particle2 = new Particle(width*(2/3), height/2, 5);
    universe = new Universe(width, height);

    universe.addObjects([particle1, particle2]);
  };

  s.draw = function() {
    s.background(4, 58, 74);

    var force1 = attractor.calculateAttraction(particle1);
    var force2 = attractor.calculateAttraction(particle2);

    particle1.applyForce(force1);
    particle2.applyForce(force2);
    particle1.display();
    particle2.display();
    attractor.display();
  }

  s.mousePressed = function() {
    // Wind is not scaled by mass
    var wind = s.createVector(0.5, 0);
    particle1.applyForce(wind);
    particle2.applyForce(wind);
  }
}

var myP5 = new p5( sketch );


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function( s ) {
  return function Universe(width, height) {
    this.width = width;
    this.height = height;
    this.objects = [];

    this.addObject =  function(obj) {
      obj.applyUniverse(this.constraints);
      this.objects.push(obj);
    }

    this.addObjects = function(objects) {
      for(var i = 0; i < objects.length; i++) {
        this.addObject(objects[i]);
      }
    }

    this.constraints = {
      leftEdge : 0, 
      rightEdge : this.width,
      bottomEdge : this.height,
      topEdge : 0 
    };
  };
});



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Particle;
// Newton's second law: F = M * A
// where:
// F: Force
// M: Mass
// A: Acceleration

function Particle( s ) {
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Attractor;
// Gravity
// Fg = m1 * m1*G / distance^2
// where:
// Fg: Gravity
// m1: mass 1 object
// m2: mass 2 object
// distance: distance between the two objects

function Attractor( s ) {
  return function(x, y, mass) {
    this.position = s.createVector(x, y);
    this.mass = mass;
    this.G = 3 ;

    function forceDirection(p1, p2) {
      return p5.Vector.sub(p1, p2);
    }

    this.calculateAttraction = function(m) {
      var force = forceDirection(this.position, m.position );

      var distance = force.mag();
      distance = s.constrain(distance, 5, 25);
      force.normalize();
      // Calculate gravitional force magnitude  
      var strength = (this.G * this.mass * m.mass) / (distance * distance);
      // Get force vector --> magnitude * direction
      force.mult(strength);
      return force;
    };

    this.display = function() {
      s.ellipseMode(s.CENTER);
      s.strokeWeight(4);
      s.stroke(0);
      s.fill(175, 200);
      s.ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
    };


    function gravity(m1, m2) {
    }
  };
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("js modules work");
// module.exports = "It works from content.js.";


/***/ })
/******/ ]);