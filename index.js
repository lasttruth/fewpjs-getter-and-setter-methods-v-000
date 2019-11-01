// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  set diameter(diameter){
    this.diameter = radius * 2;
  }

  set circumference(circumference){
    this.circumference = Math.pi * diameter
  }
}
