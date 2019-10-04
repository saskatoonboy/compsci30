// Line Art
// Eric James
// Sept. Mon. 9th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binaryImg;
let speechImg;
let drawCases = [[], [], []]
let page = -1;
let caseCount = [5, 5];
let shapes = [[0, 415, 267, 25, 65, 400, [0, 255, 0]], [0, 485, 267, 25, 65, 320, [0, 255, 0]], [0, 440, 327, 20, 75, 0, [0, 0, 255]], [0, 460, 327, 20, 75, 0, [0, 0, 255]], [0, 450, 267, 45, 75, 0, [0, 255, 0]], [0, 450, 212, 50, 50, 0, [235, 206, 150]], [0, 176, 280, 25, 65, 400, [255, 0, 0]], [0, 246, 280, 25, 65, 320, [255, 0, 0]], [0, 201, 340, 20, 75, 0, [0, 0, 255]], [0, 221, 340, 20, 75, 0, [0, 0, 255]], [0, 211, 280, 45, 75, 0, [255, 0, 0]], [0, 211, 225, 50, 50, 0, [235, 206, 150]], [0, 623, 269, 25, 65, 400, [0, 255, 0]], [0, 693, 269, 25, 65, 320, [0, 255, 0]], [0, 648, 329, 20, 75, 0, [0, 0, 255]], [0, 668, 329, 20, 75, 0, [0, 0, 255]], [0, 658, 269, 45, 75, 0, [0, 255, 0]], [0, 658, 214, 50, 50, 0, [235, 206, 150]], [0, 903, 290, 25, 65, 400, [255, 0, 0]], [0, 973, 290, 25, 65, 320, [255, 0, 0]], [0, 928, 350, 20, 75, 0, [0, 0, 255]], [0, 948, 350, 20, 75, 0, [0, 0, 255]], [0, 938, 290, 45, 75, 0, [255, 0, 0]], [0, 938, 235, 50, 50, 0, [235, 206, 150]], [0, 228, 679, 25, 65, 400, [255, 0, 255]], [0, 298, 679, 25, 65, 320, [255, 0, 255]], [0, 253, 739, 20, 75, 0, [0, 0, 255]], [0, 273, 739, 20, 75, 0, [0, 0, 255]], [0, 263, 679, 45, 75, 0, [255, 0, 255]], [0, 263, 624, 50, 50, 0, [235, 206, 150]], [0, 602, 677, 25, 65, 400, [255, 255, 0]], [0, 672, 677, 25, 65, 320, [255, 255, 0]], [0, 627, 737, 20, 75, 0, [0, 0, 255]], [0, 647, 737, 20, 75, 0, [0, 0, 255]], [0, 637, 677, 45, 75, 0, [255, 255, 0]], [0, 637, 622, 50, 50, 0, [235, 206, 150]], [0, 444, 674, 25, 65, 400, [255, 0, 0]], [0, 514, 674, 25, 65, 320, [255, 0, 0]], [0, 469, 734, 20, 75, 0, [0, 0, 255]], [0, 489, 734, 20, 75, 0, [0, 0, 255]], [0, 479, 674, 45, 75, 0, [255, 0, 0]], [0, 479, 619, 50, 50, 0, [235, 206, 150]], [0, 898, 663, 25, 65, 400, [255, 0, 0]], [0, 968, 663, 25, 65, 320, [255, 0, 0]], [0, 923, 723, 20, 75, 0, [0, 0, 255]], [0, 943, 723, 20, 75, 0, [0, 0, 255]], [0, 933, 663, 45, 75, 0, [255, 0, 0]], [0, 933, 608, 50, 50, 0, [235, 206, 150]]];
let fixedShapes = [[1, 20, 25, 490, 370, 0, [255, 255, 255]], [1, 530, 25, 530, 370, 0, [255, 255, 255]], [1, 390, 425, 320, 345, 0, [255, 255, 255]], [1, 720, 425, 340, 345, 0, [255, 255, 255]], [1, 20, 425, 360, 345, 0, [255, 255, 255]]];
let ELLIPSE = 0;
let RECTANGLE = 1;
let LINE = 2;
let control = "1";
let lastAdded = -1;
let firstPoint = -1;
let page0 = [[1, 20, 25, 490, 370, 0, [255, 255, 255]], [1, 530, 25, 530, 370, 0, [255, 255, 255]], [1, 390, 425, 320, 345, 0, [255, 255, 255]], [1, 720, 425, 340, 345, 0, [255, 255, 255]], [1, 20, 425, 360, 345, 0, [255, 255, 255]], 
[3, 246, 29, 198, 196, "Salut Elizabeth!", 275, 129, 20], [3, 26, 71, 176, 157, "Salut!", 75, 151], [3, 746, 29, 198, 196, ""], [3, 535, 71, 170, 157, ""],
[0, 415, 267, 25, 65, 400, [0, 255, 0]], [0, 485, 267, 25, 65, 320, [0, 255, 0]], [0, 440, 327, 20, 75, 0, [0, 0, 255]], [0, 460, 327, 20, 75, 0, [0, 0, 255]], [0, 450, 267, 45, 75, 0, [0, 255, 0]], [0, 450, 212, 50, 50, 0, [235, 206, 150]], [0, 176, 280, 25, 65, 400, [255, 0, 0]], [0, 246, 280, 25, 65, 320, [255, 0, 0]], [0, 201, 340, 20, 75, 0, [0, 0, 255]], [0, 221, 340, 20, 75, 0, [0, 0, 255]], [0, 211, 280, 45, 75, 0, [255, 0, 0]], [0, 211, 225, 50, 50, 0, [235, 206, 150]], [0, 653, 269, 25, 65, 400, [0, 255, 0]], [0, 723, 269, 25, 65, 320, [0, 255, 0]], [0, 678, 329, 20, 75, 0, [0, 0, 255]], [0, 698, 329, 20, 75, 0, [0, 0, 255]], [0, 688, 269, 45, 75, 0, [0, 255, 0]], [0, 688, 214, 50, 50, 0, [235, 206, 150]], [0, 903, 290, 25, 65, 400, [255, 0, 0]], [0, 973, 290, 25, 65, 320, [255, 0, 0]], [0, 928, 350, 20, 75, 0, [0, 0, 255]], [0, 948, 350, 20, 75, 0, [0, 0, 255]], [0, 938, 290, 45, 75, 0, [255, 0, 0]], [0, 938, 235, 50, 50, 0, [235, 206, 150]], [0, 228, 679, 25, 65, 400, [255, 0, 255]], [0, 298, 679, 25, 65, 320, [255, 0, 255]], [0, 253, 739, 20, 75, 0, [0, 0, 255]], [0, 273, 739, 20, 75, 0, [0, 0, 255]], [0, 263, 679, 45, 75, 0, [255, 0, 255]], [0, 263, 624, 50, 50, 0, [235, 206, 150]], [0, 602, 677, 25, 65, 400, [255, 255, 0]], [0, 672, 677, 25, 65, 320, [255, 255, 0]], [0, 627, 737, 20, 75, 0, [0, 0, 255]], [0, 647, 737, 20, 75, 0, [0, 0, 255]], [0, 637, 677, 45, 75, 0, [255, 255, 0]], [0, 637, 622, 50, 50, 0, [235, 206, 150]], [0, 444, 674, 25, 65, 400, [255, 0, 0]], [0, 514, 674, 25, 65, 320, [255, 0, 0]], [0, 469, 734, 20, 75, 0, [0, 0, 255]], [0, 489, 734, 20, 75, 0, [0, 0, 255]], [0, 479, 674, 45, 75, 0, [255, 0, 0]], [0, 479, 619, 50, 50, 0, [235, 206, 150]], [0, 898, 663, 25, 65, 400, [255, 0, 0]], [0, 968, 663, 25, 65, 320, [255, 0, 0]], [0, 923, 723, 20, 75, 0, [0, 0, 255]], [0, 943, 723, 20, 75, 0, [0, 0, 255]], [0, 933, 663, 45, 75, 0, [255, 0, 0]], [0, 933, 608, 50, 50, 0, [235, 206, 150]]];
let page1 = [[1, 20, 25, 490, 370, 0, [255, 255, 255]], [1, 530, 25, 530, 370, 0, [255, 255, 255]], [1, 390, 425, 320, 345, 0, [255, 255, 255]], [1, 720, 425, 340, 345, 0, [255, 255, 255]], [1, 20, 425, 360, 345, 0, [255, 255, 255]]];
let page2 = [[1, 20, 25, 490, 370, 0, [255, 255, 255]], [1, 530, 25, 530, 370, 0, [255, 255, 255]], [1, 390, 425, 320, 345, 0, [255, 255, 255]], [1, 720, 425, 340, 345, 0, [255, 255, 255]], [1, 20, 425, 360, 345, 0, [255, 255, 255]]];

function preload() {
  binaryImg = loadImage('assets/binary.jfif');
  speechImg = loadImage("assets/download.png");
}

function setup() {
  let canvasWidth;
  let canvasHeight;
  if (windowWidth > windowHeight) {
    canvasHeight = windowHeight;
    canvasWidth = windowHeight * 11 / 8;
  } else {
    canvasWidth = windowWidth;
    canvasHeight = windowWidth * 8 / 11;
  }
  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  fill(255);
  drawShapes();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawShapes() {

  if (page === -1) {
    for (let i = 0; i < fixedShapes.length; i++) {
      if (fixedShapes[i][0] === 0) {
        drawEllipse(fixedShapes[i]);
      } else if (fixedShapes[i][0] === 1) {
        drawRect(fixedShapes[i]);
      } else if (fixedShapes[i][0] === 2) {
        drawLine(fixedShapes[i]);
      } else if (fixedShapes[i][0] === 3) {
        drawSpeech(fixedShapes[i]);
      }
    }

    for (let i = 0; i < shapes.length; i++) {
      if (shapes[i][0] === 0) {
        drawEllipse(shapes[i]);
      } else if (shapes[i][0] === 1) {
        drawRect(shapes[i]);
      } else if (shapes[i][0] === 2) {
        drawLine(shapes[i]);
      } else if (shapes[i][0] === 3) {
        drawSpeech(shapes[i]);
      }
    }
  } else {
    let pageShapes;
    if (page === 0) {
      pageShapes = page0;
    } else if (page === 1) {
      pageShapes = page1;
    } else if (page === 2) {
      pageShapes = page2;
    }

    for (let i = 0; i < pageShapes.length; i++) {
      if (pageShapes[i][0] === 0) {
        drawEllipse(pageShapes[i]);
      } else if (pageShapes[i][0] === 1) {
        drawRect(pageShapes[i]);
      } else if (pageShapes[i][0] === 2) {
        drawLine(pageShapes[i]);
      } else if (pageShapes[i][0] === 3) {
        drawSpeech(pageShapes[i]);
      }
    }
  }
}

function drawEllipse(shape) {
  push();
  translate(shape[1], shape[2]);
  rotate(shape[5]);
  fill(shape[6][0], shape[6][1], shape[6][2]);
  ellipse(0, 0, shape[3], shape[4]);
  pop();
}

function drawRect(shape) {
  //rotate(shape[4]);
  fill(shape[6][0]);
  rect(shape[1], shape[2], shape[3], shape[4]);
  //rotate(360-shape[4]);
}

function drawLine(shape) {
  line(shape[1], shape[2], shape[3], shape[4]);
}

function drawSpeech(shape) {
  image(speechImg, shape[1], shape[2], shape[3], shape[4]);
  fill(0);
  textSize(shape[8]);
  text(shape[5], shape[6], shape[7]);
}

function person() {

  shapes.push([0, mouseX - 35, mouseY, 25, 65, 400, [255, 0, 0]], [0, mouseX + 35, mouseY, 25, 65, 320, [255, 0, 0]], [0, mouseX - 10, mouseY + 60, 20, 75, 0, [0, 0, 255]], [0, mouseX + 10, mouseY + 60, 20, 75, 0, [0, 0, 255]], [0, mouseX, mouseY, 45, 75, 0, [255, 0, 0]], [0, mouseX, mouseY - 55, 50, 50, 0, [235, 206, 150]]);

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
  } else if (control === "6") {
    shapes.push([3, mouseX, mouseY, speechImg.width, speechImg.height, ""]);
  }
}

function keyPressed() {
  let options = ["1", "2", "3", "4", "5", "6"];
  if (options.indexOf(key) > -1) {

    control = key;

  } else if (key === "z") {
    if (lastAdded > -1) {
      shapes.remove(lastAdded);
    }
  } else if (key === "p") {
    let toPrint = "[";
    for (let shape = 0; shape < shapes.length; shape++) {
      toPrint = toPrint + "[";
      for (let char = 0; char < shapes[shape].length; char++) {
        toPrint = toPrint + shapes[shape][char];
        if (char + 1 < shapes[shape].length) {
          toPrint = toPrint + ", ";
          if (char + 2 === shapes[shape].length) {
            toPrint = toPrint + "[";
          }
        }
      }
      toPrint = toPrint + "]]";
      if (shape + 1 < shapes.length) {
        toPrint = toPrint + ", "
      }
    }
    print(toPrint + "]");
  } else if (key === "a") {
    if (page > -1) {
      page--;
    }
  } else if (key === "d") {
    if (page < 2) {
      page++;
    }
  }
}

function mouseWheel(event) {
  let selectedShape = getSelectedShape();
  print(selectedShape);
  if (selectedShape === -1) {
    return;
  } else if (control === "1") {
    if (event.delta > 0 || (shapes[selectedShape][3] > 10 && shapes[selectedShape][4] > 10)) {
      shapes[selectedShape][1] -= event.delta / 2;
      shapes[selectedShape][2] -= event.delta / 2;
      shapes[selectedShape][3] += event.delta;
      shapes[selectedShape][4] += event.delta;
    }
  } else if (control === "2") {
    if (event.delta > 0 || shapes[selectedShape][3]) {
      shapes[selectedShape][1] -= event.delta / 2;
      shapes[selectedShape][3] += event.delta;
    }
  } else if (control === "3") {
    if (event.delta > 0 || shapes[selectedShape][4] > 10) {
      shapes[selectedShape][2] -= event.delta / 2;
      shapes[selectedShape][4] += event.delta;
    }
  } else if (control === "4") {
    if (event.delta < 0 || shapes[selectedShape][1] > 0) {
      shapes[selectedShape][1] -= event.delta;
    }
  } else if (control === "5") {
    if (event.delta < 0 || shapes[selectedShape][2] > 0) {
      shapes[selectedShape][2] -= event.delta;
    }
  } else if (control === "6") {
    shapes[selectedShape][5] += event.delta;
    if (shapes[selectedShape][5] < 0) {
      shapes[selectedShape][5] += 360;
    } else if (shapes[selectedShape][6] >= 360) {
      shapes[selectedShape][5] -= 360;
    }
  }
}

function getSelectedShape() {
  let selectedShape = -1;
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i][1] <= mouseX && shapes[i][1] + shapes[i][3] >= mouseX && shapes[i][2] <= mouseY && shapes[i][2] + shapes[i][4] >= mouseY) {
      selectedShape = i;
    }
  }

  return selectedShape;
}
