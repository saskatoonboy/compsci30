// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binaryImg;
let drawCases = [[],[],[]]
let page = 0;
let caseCount = [5, 5];
let shapes = [];
let ELLIPSE = 0;
let RECTANGLE = 1;
let LINE = 2;
let control = "1";
let lastAdded = -1;
let firstPoint = -1;

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  fill(255);
  drawShapes();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawShapes() {
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i][0] === 0) {
      drawEllipse(i);
    } else if (shapes[i][0] === 1) {
      drawRect(i);
    } else if (shapes[i][0] === 2) {
      drawLine(i);
    }
  }
}

function drawEllipse(index) {
    ellipseMode(CORNER);
    angleMode(DEGREES);
    //rotate(shape[index][4]);
    fill(shapes[index][6][0]);
    ellipse(shapes[index][1], shapes[index][2], shapes[index][3], shapes[index][4]);
    //rotate(360-shape[index][4]);
}

function drawRect(index) {
    ellipseMode(CORNER);
    angleMode(DEGREES);
    //rotate(shapes[index][4]);
    fill(shapes[index][6][0]);
    rect(shapes[index][1], shapes[index][2], shapes[index][3], shapes[index][4]);
    //rotate(360-shapes[index][4]);
}

function drawLine(index) {
  line(shapes[index][1], shapes[index][2], shapes[index][3], shapes[index][4]);
}

function person() {

  shapes.push([0, mouseX, mouseY, 50, 75, 0, [0, 0, 0]]);
  shapes.push([0, mouseX, mouseY, 50, 75, 90, [50, 50, 50]]);
  shapes.push([0, mouseX, mouseY, 50, 75, 180, [100, 100, 100]]);
  shapes.push([0, mouseX, mouseY, 50, 75, 270, [150, 150 , 150]]);

}

function addEllipse(x, y, w, h, r, c) {
  shapes.push([0, x, y, w, h, r, c]);
}

function addRectangle(x, y, w, h, r, c) {
  shapes.push([1, x, y, w, h, r, c]);
}

function addLine(x, y, w, c) {
  shapes.push([2, firstPoint[0], firstPoint[1], x, y, w, c]);
}

function mouseClicked() {
  if (control === "1") {

    person()

  } else if (control === "2") {

    addEllipse(mouseX, mouseY, 50, 75, 0, [255, 255, 255]);

  } else if (control === "3") {

    addRectangle(mouseX, mouseY, 50, 50, 0, [255, 255, 255]);

  } else if (control === "4") {
    print(firstPoint !== -1, firstPoint);
    if (firstPoint !== -1) {
      addLine(mouseX, mouseY, 1, [0, 0, 0]);
      firstPoint = -1
    } else {
      firstPoint = [mouseX, mouseY];
    }
  } else if (control === "5") {
    shapes.push(shapes[getSelectedShape()]);
  }
}

function keyPressed() {
  let options = ["1", "2", "3", "4", "5"];
  if (options.indexOf(key) > -1) {

    control = key;

  } else if (key === "z") {
    if (lastAdded > -1) {
      shapes.remove(lastAdded);
    }
  }
}

function mouseWheel(event) {
  let selectedShape = getSelectedShape();
  if (selectedShape === -1) {
    return;
  }else if (control === "1") {
    if (event.delta > 0 || (shapes[selectedShape][3] > 10 && shapes[selectedShape][4] > 10)) {
      shapes[selectedShape][1] -= event.delta/2;
      shapes[selectedShape][2] -= event.delta/2;
      shapes[selectedShape][3] += event.delta;
      shapes[selectedShape][4] += event.delta;
    }
  }else if (control === "2") {
    if (event.delta > 0 || shapes[selectedShape][3]) {
      shapes[selectedShape][1] -= event.delta/2;
      shapes[selectedShape][3] += event.delta;
    }
  }else if (control === "3") {
    if (event.delta > 0 || shapes[selectedShape][4] > 10) {
      shapes[selectedShape][2] -= event.delta/2;
      shapes[selectedShape][4] += event.delta;
    }
  }else if (control === "4") {
    if (event.delta < 0 || shapes[selectedShape][1] > 0) {
      shapes[selectedShape][1] -= event.delta;
    }
  }else if (control === "5") {
    if (event.delta < 0 || shapes[selectedShape][2] > 0) {
      shapes[selectedShape][2] -= event.delta;
    }
  }
}

function getSelectedShape() {
  let selectedShape = -1;
  for (let i = 0; i < shapes.length; i ++) {
    if (shapes[i][1] <= mouseX && shapes[i][1] + shapes[i][3] >= mouseX && shapes[i][2] <= mouseY && shapes[i][2] + shapes[i][4] >= mouseY) {
      selectedShape = i;
    }
  }

  return selectedShape;
}
