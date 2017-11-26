function Universe(width, height) {
  this.width = width;
  this.height = height;
  this.objects = [];

  this.addObject =  function(obj) {
    obj.applyUniverse(this.constraints);
    this.objects.push(obj);
  }

  this.constraints = {
    leftEdge : 0, 
    rightEdge : this.width,
    bottomEdge : this.height,
    topEdge : 0 
  };
}

