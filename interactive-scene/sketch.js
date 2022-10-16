// Music Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - I used sound and made sure the piano would be centered no matter
//   the size of the window.

let state = "start";

let A, B, C, D, E, F, G, C2, CSharp, DSharp, FSharp, GSharp, ASharp;
let drums;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
    textSize(40);
    text("Press Any Key To Start", width/2 - 250, height/2);
  }
  if (state === "piano") {
    drawPiano();
  }
  if (state === "drums") {
      image(drums, width/2 - 500, height/2 - 500);
  }
}

//start screen
function startScreen() {
  if (keyIsPressed) {
    state = "piano";
  }
}

if (state === "piano") {
  drums = createButton("Drums");
  drums.position(25, 25);
  drums.mousePressed(state === "drums");
}

// white = 0, black = 1
let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

// draw the piano
function drawPiano(){
  let x = width/2 - 200;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 0) {
      fill("white");
      rect(x, height/2 - 100, 50, 150);
      x += 50;
    }
  }
  x = width/2 - 150;
  for (let j = 0; j < keys.length; j++) {
    if (keys[j] === 1) {
      fill("black");
      rect(x - 17, height/2 - 100, 34, 100);
      x += 50;
    }
    // else {
    //   x += 50;
    // }
  }
}

//iterate through the keys array
// if 1, draw a black rectangle 
// x += 50
// else ???

// add sound files
function preload() {
  soundFormats("mp3", "wav");
  C = loadSound("C.mp3");
  D = loadSound("D.mp3");
  E = loadSound("E.mp3");
  F = loadSound("F.mp3");
  G = loadSound("G.mp3");
  A = loadSound("A.mp3");
  B = loadSound("B.mp3");
  C2 = loadSound("C2.wav");
}

function preload() {
  drums = loadImage("drums.jpeg");
}

function keyPressed() {
  if (keyCode === 65) {
    A.play();
  }
  else if (keyCode === 66) {
    B.play();
  }
  else if (keyCode === 67) {
    C.play();
  }
  else if (keyCode === 68) {
    D.play();
  }
  else if (keyCode === 69) {
    E.play()
  }
  else if (keyCode === 70) {
    F.play();
  }
  else if (keyCode === 71) {
    G.play();
  }
}

