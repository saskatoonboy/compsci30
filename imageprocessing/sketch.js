// Image Processing
// Eric James
// Oct. Tue. 1st 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fishImg;
let binaryImg;
let greyImg;

function preload() {
  fishImg = loadImage("assets/fish.jpg");
  binaryImg = loadImage("assets/binary.jfif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  greyImg = greyScale(fishImg);
}

function draw() {
  background(255);


  imageMode(CENTER);
  image(greyImg, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function greyScale(img) {
  let newImage = createImage(img.width, img.height);
  
  // load pixels
  img.loadPixels();
  newImage.loadPixels();
  
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let p = img.get(x, y);
      let grey = (red(p)+green(p)+blue(p))/3;
      newImage.set(x, y, color(grey, grey, grey));
    }
  }

  newImage.updatePixels();
  return newImage;
}
