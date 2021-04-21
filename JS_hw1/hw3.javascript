function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here

Shape.prototype.calc = function(){
   return this.sides * this.sideLength;
}

square = new Shape('square',4,12);

console.log(square.calc())