// Triangle
// Eric James
// Dec. Tues. 3rd 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangles = [];
let points = [{x:400, y:100}, {x:100, y:600}, {x:700, y:600}];
let depth = 0;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  sterpinski(points, depth);
  if (millis()-time >= 1000) {
    depth ++;
    time = millis();
  }
  if (depth > 8) {
    depth = 9;
  }
}

function sterpinski(points, level) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if (level > 0) {
    sterpinski([points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2])], level-1);
    sterpinski([points[1], getMidPoint(points[1], points[0]), getMidPoint(points[1], points[2])], level-1);
    sterpinski([points[2], getMidPoint(points[2], points[1]), getMidPoint(points[2], points[0])], level-1);
  }
}

function getMidPoint(point1, point2) {
  return {x: (point1.x + point2.x)/2, y: (point1.y + point2.y)/2};
}
