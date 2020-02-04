import { Triangle } from "./../src/scripts.js";

describe("Triangle", () => {
    test("if user inputs a number then add numbers to corresponding sides", () => {
        var triangle = new Triangle(5,5,5);
        expect(triangle.side1).toEqual(5);
        expect(triangle.side2).toEqual(5);
        expect(triangle.side3).toEqual(5);

    });
    test("if all sides are equal, return equilateral", () => {
        var triangle = new Triangle(5,5,5);
        expect(triangle.decideType()).toEqual("equilateral");

    });
    test("if 2 sides are equal, return isosceles", () => {
        var triangle = new Triangle(5,5,2);
        expect(triangle.decideType()).toEqual("isosceles");

    });
    test("if no sides are equal, return scalene", () => {
        var triangle = new Triangle(5,3,2);
        expect(triangle.decideType()).toEqual("scalene");

    });
    test("if no sides are equal, and the sum of two sides is not greater than or equal to one side, return not a triangle", () => {
        var triangle = new Triangle(77,3,2);
        expect(triangle.decideType()).toEqual("not-a-triangle");

    });
    
    

});
