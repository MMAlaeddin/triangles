
  export function Triangle(side1, side2, side3) {
    this.equalateral = false;
    this.isosceles = false;
    this.scalene = false;
    this.isNotTriangle = true;
    
  }
  
  
  Triangle.prototype.decideType = function () {
    if (side1 + side2 > side3) {
      if (side1 === side2 === side3) {
        this.equalateral = true;
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        this.isosceles = true
      } else {
        this.scalene = true
      }
    } else if (side2 + side3 > side1) {
      if (side1 === side2 === side3) {
        this.equalateral = true;
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        this.isosceles = true
      } else {
        this.scalene = true
      }
    } else if (side3 + side1 > side2) {
      if (side1 === side2 === side3) {
        this.equalateral = true;
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        this.isosceles = true
      } else {
        this.scalene = true
      }
    } else {
      this.isNotTriangle = false;
    }
  }