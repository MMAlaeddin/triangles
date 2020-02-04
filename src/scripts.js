$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 + side2 > side3) {
      if (side1 === side2 === side3) {
        $(".equilateral").show();
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        $(".isosceles").show();
      } else {
        $(".scalene").show();
      }
    } else if (side2 + side3 > side1) {
      if (side1 === side2 === side3) {
        $(".equilateral").show();
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        $(".isosceles").show();
      } else {
        $(".scalene").show();
      }
    } else if ( side3 + side1 > side2) {
      if (side1 === side2 === side3) {
        $(".equilateral").show();
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        $(".isosceles").show();
      } else {
        $(".scalene").show();
      }
    } else {
      $('.not-triangle')
    }
  });
});