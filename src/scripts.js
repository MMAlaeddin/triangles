
export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 =  side2;
  this.side3 = side3;
  this.equalateral = false;
  this.isosceles = false;
  this.scalene = false;
  this.isNotTriangle = true;
}


Triangle.prototype.decideType = function () {
  if (this.side1 +  this.side2 > this.side3) {
    if (this.side1 ===  this.side2 === this.side3) {
      this.equalateral = true;
    } else if (this.side1 ===  this.side2 ||  this.side2 === this.side3 || this.side3 === this.side1) {
      this.isosceles = true;
    } else {
      this.scalene = true;
    }
  } else if ( this.side2 + this.side3 > this.side1) {
    if (this.side1 ===  this.side2 === this.side3) {
      this.equalateral = true;
    } else if (this.side1 ===  this.side2 ||  this.side2 === this.side3 || this.side3 === this.side1) {
      this.isosceles = true;
    } else {
      this.scalene = true;
    }
  } else if (this.side3 + this.side1 >  this.side2) {
    if (this.side1 ===  this.side2 === this.side3) {
      this.equalateral = true;
    } else if (this.side1 ===  this.side2 ||  this.side2 === this.side3 || this.side3 === this.side1) {
      this.isosceles = true;
    } else {
      this.scalene = true;
    }
  } else {
    this.isNotTriangle = false;
  }
};