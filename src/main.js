import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Triangle } from './scripts.js';

function chooseDisplay(triangle) {
  if (triangle.equaleteral) {
    $(".equilateral").show();
  } else if (triangle.isosceles) {
    $(".isosceles").show();
  } else if (triangle.scalene) {
    $(".scalene").show();
  } else {
    $(".not-triangle").show();
  }
}

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var triangle = new Triangle(side1, side2, side3);

    triangle.decideType();
    chooseDisplay(triangle);
  });
});