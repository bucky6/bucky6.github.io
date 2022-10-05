// Music Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - I used sound and made sure the piano would be centered no matter
//   the size of the window.

let state = "start";
let whiteRectX = 50;
let blackRectX = 35;

let A, B, C, D, E, F, G, CSharp, DSharp, FSharp, GSharp, ASharp;

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

let whiteKeys = [0, 1, 2, 3, 4, 5, 6, 7];
let blackKeys = [1, 2, 4, 5, 6];

//draw the piano
function drawPiano() {
  //draw the white keys
  function drawWhiteKeys() {
    let whiteX = width/2 - whiteRectX*4;
    for (let i = 0; i < whiteKeys.length; i++) {
      fill("white");
      rect(whiteX, height/2 - 100, whiteRectX, 150);
      whiteX += 50;
    }
  }
  drawWhiteKeys();
  // draw the black keys
  function drawBlackKeys() {
    function cSharpDSharp() {
      let blackX1 = width/2 - whiteRectX*4 + 7;
      for (let i = 0; i < 2; i++) {
        fill("black");
        rect(blackX1 += 25, height/2 - 100, blackRectX, 100);
        blackX1 += 25;
      }
    }
    cSharpDSharp();
    function fSharpGSharpASharp() {
      let blackX2 = width/2 - whiteRectX +7;
      for (let i = 0; i< 3; i++) {
        fill("black");
        rect(blackX2 += 25, height/2- 100, blackRectX, 100);
        blackX2 += 25;
      }
    }
    fSharpGSharpASharp();
  }
  drawBlackKeys();
}

// add sound files
function preload() {
  soundFormats("mp3");
  C = loadSound("C.mp3");
  D = loadSound("D.mp3");
  E = loadSound("E.mp3");
  F = loadSound("F.mp3");
  G = loadSound("G.mp3");
  A = loadSound("A.mp3");
  B = loadSound("B.mp3");
}