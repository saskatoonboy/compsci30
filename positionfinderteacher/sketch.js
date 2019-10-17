// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let predictor;
let mobilenet;
let value = 0;
let video;
let slider;
let addButton;
let trainButton;
let pastValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function modelReady() {
  console.log("Model Ready!");
}

// function customModelReady() {
//   console.log("Custom Model Ready!");
//   predictor.predict(gotResults);
// }

function videoReady() {
  console.log("Video Ready!");
}

function getLoss(loss) {
  console.log(loss);
  if (loss === null) {
    predictor.predict(gotResults);
    predictor.save();
  }
}

function setup() {
  createCanvas(windowWidth/2, windowHeight/2+50);

  video = createCapture(VIDEO);
  video.hide();

  mobilenet = ml5.featureExtractor("MobileNet", modelReady);
  predictor = mobilenet.regression(video, videoReady);

  slider = createSlider(0, 1, 0.5, 0.01);

  addButton = createButton("Add Example");
  addButton.mousePressed(function() {
    predictor.addImage(slider.value());
  });

  trainButton = createButton("Train");
  trainButton.mousePressed(function() {
    predictor.train(getLoss);
  });
}

function draw() {
  background(0);
  displayVideo();
}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2+50);
}

function displayVideo() {
  image(video, 0, 0, width, height-50);

  fill(255);
  textSize(24);
  text(value, 0, height);
}

function gotResults(error, result) {
  if (error) {
    console.log(error);
  } else {
    //console.log(result);
    value = 1-result.value;
  }
  predictor.predict(gotResults);
}
