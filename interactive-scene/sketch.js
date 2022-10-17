// Music Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - I used sound and made sure the piano would be centered no matter
//   the size of the window.

// define all the variables

let state = "start";
let A, B, C, D, E, F, G, C2, CSharp, DSharp, FSharp, GSharp, ASharp;
let drumsImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // make the start screen
  if (state === "start") {
    startScreen();
    textSize(40);
    text("Press Any Key To Start", width/2 - 250, height/2);
  }
  pianoScreen();
  if (state === "drums") {
      image(drumsImage, width/2 - 500, height/2 - 500)
  }
//start screen
  function startScreen() {
    if (keyIsPressed) {
      state = "piano";
    }
  }
}

//make the piano screen and add in notes
function pianoScreen() {
  if (state === "piano") {
    drawPiano();

  }
}

// white = 0, black = 1
let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

// draw the piano
function drawPiano() {
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
      if(keys[j-2]===0) {x+=50}
      fill("black");
      rect(x - 17, height/2 - 100, 34, 100);
      x += 50;
    }
  }
}

function preload() {
  soundFormats("mp3");
  C = loadSound("C.mp3");
  D = loadSound("D.mp3");
  E = loadSound("E.mp3");
  F = loadSound("F.mp3");
  G = loadSound("G.mp3");
  A = loadSound("A.mp3");
  B = loadSound("B.mp3");
  C2 = loadSound("C2.mp3");
  CSharp = loadSound("C#.mp3");
  DSharp = loadSound("D#.mp3");
  FSharp = loadSound("F#.mp3");
  GSharp = loadSound("G#.mp3");
  ASharp = loadSound("A#.mp3");
}

function preload() {
  drumsImage = loadImage("drums.jpeg");
}