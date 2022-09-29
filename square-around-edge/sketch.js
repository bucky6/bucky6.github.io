// Square Around Edge
// Bucky Pederson-Bradbury
// Sept. 26, 2022

let x, y, squareSize, speed, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 50;
  speed = 5;
  state = "right";
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
}

function drawSquare() {
  fill("black");
  square(x, y, squareSize);
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width) {
      x = width - squareSize; //dont fall off
      state = "down";
    }
  }

  if (state === "down") {
    y += speed;
    if (y + squareSize >= height) {
      state = "left";
    }
  }

  if (state === "left") {
    x -= speed;
    if (x + squareSize >= width) {
      state = "up";
    }  
  }

  if (state === "up") {
    y -= speed;
    if (y + squareSize >= height) {
      state = "right";
    }
  }
}