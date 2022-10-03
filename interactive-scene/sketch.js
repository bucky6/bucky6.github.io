// Music Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    drawPiano();
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
    mouseY >= top && mouseY <= bottom;
}

function drawPiano() {
  let x = 50;
  // draw white keys
  for (let i = 0; i < 16; i++) {
    fill("white");
    rect(x, 200, 50, 150);
    x += 50;
  }
  
}