// Music Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - I used sound and made sure the piano would be centered no matter
//   the size of the window.

let state = "start";

let A, B, C, D, E, F, G, C2, CSharp, DSharp, FSharp, GSharp, ASharp;

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
  if (state === "main") {
    drawPiano();
  }
}

//start screen
function startScreen() {
  if (keyIsPressed) {
    state = "main";
  }
}

// white = 0, black = 1
let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0];

// draw the piano
function drawPiano(){
  let x = width/2 - 200;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 0) {
      fill("white");
      rect(x + 17, height/2 - 100, 50, 150);
      x += 50;
    }
    else {
      fill("black");
      rect(x - 17, height/2- 100, 34, 100);
    }
  }
}

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

// createbutton(notes[i])

