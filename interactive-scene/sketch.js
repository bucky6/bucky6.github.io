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

//start screen
function startScreen() {
  if (keyIsPressed) {
    state = "main";
  }
}

//draw the piano
function drawPiano() {
  //draw the white keys
  function drawWhiteKeys() {
    let whiteX = 50;
    for (let i = 0; i < 8; i++) {
      fill("white");
      rect(whiteX, 200, 50, 150);
      whiteX += 50;
    }
  }
  drawWhiteKeys();
  // draw the black keys
  function drawBlackKeys() {
    function cSharpDSharp() {
      let blackX1 = 60;
      for (let i = 0; i < 2; i++) {
        fill("black");
        rect(blackX1 += 25, 200, 35, 100);
        blackX1 += 25;
      }
    }
    cSharpDSharp();
    function fSharpGSharpASharp() {
      let blackX2 = 210;
      for (let i = 0; i< 3; i++) {
        fill("black");
        rect(blackX2 += 25, 200, 35, 100);
        blackX2 += 25;
      }
    }
    fSharpGSharpASharp();
  }
  drawBlackKeys();
}