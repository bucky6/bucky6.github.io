// Image Demo
// Bucky
// September 22, 2022

let scaler = 1;

let fishImage;

function preload() {
  fishImage = loadImage("clown-fish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishImage, mouseX, mouseY, fishImage.width*scaler, fishImage.height*scaler);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scaler += 0.5;
  } 
  else if (keyCode === DOWN_ARROW) {
    scaler -= 0.5;
  }
}