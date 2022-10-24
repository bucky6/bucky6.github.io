// Piano Simulator
// Bucky Pederson-Bradbury
// October 11, 2022
//
// Extra for Experts:
// - I used sound and made sure the piano would be centered no matter
//   the size of the window.

// define all the variables
let state = "start";
let A, B, C, D, E, F, G, C2, D2, E2, F2, G2, A2, B2, cSharp, dSharp, fSharp, gSharp, aSharp, c2Sharp, d2Sharp, f2Sharp, g2Sharp, a2Sharp;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // make the start screen
  if (state === "start") {
    startScreen();
    textSize(40);
    text("Click the mouse To Start", width/2 - 250, height/2);
  }
  pianoScreen();

  //start screen
  function startScreen() {
    if (mouseIsPressed) {
      state = "piano";
    }
  }
}

//make the piano screen
function pianoScreen() {
  if (state === "piano") {
    drawPiano(width/2 - 350);
    drawPiano(width/2);
    textSize(25);
    text("Use the corresponding key to play a note", width/2 - 250, height/4);
    text("Press space to access drums", width/2 - 190, height/4 +50);
    text("C     D    E     F     G     A    B", width/2 - 335, height/2 + 25);
    fill("white");
    text("1     2            3     4     5             6     7            8     9     0", width/2 - 305, height/2 - 20);  
  }
}

// white = 0, black = 1 
let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

// draw the piano
function drawPiano(x) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 0) {
      fill("white");
      rect(x, height/2 - 100, 50, 150);
      x += 50;
    }
  }
  x -= 350;
  for (let j = 0; j < keys.length; j++) {
    if (keys[j] === 1) {
      fill("black");
      rect(x - 17, height/2 - 100, 34, 100);
    }
    else {
      x += 50;
    }
  }
}

// load in notes
function preload() {
  soundFormats("mp3");
  C = loadSound("C.mp3");
  cSharp = loadSound("CSharp.mp3");
  D = loadSound("D.mp3");
  dSharp = loadSound("DSharp.mp3");
  E = loadSound("E.mp3");
  F = loadSound("F.mp3");
  fSharp = loadSound("FSharp.mp3");
  G = loadSound("G.mp3");
  gSharp = loadSound("GSharp.mp3");
  A = loadSound("A.mp3");
  aSharp = loadSound("ASharp.mp3");
  B = loadSound("B.mp3");
  C2 = loadSound("C2.mp3");
  c2Sharp = loadSound("C2Sharp.mp3");
  D2 = loadSound("D2.mp3");
  d2Sharp = loadSound("D2Sharp.mp3");
  E2 = loadSound("E2.mp3");
  F2 = loadSound("F2.mp3");
  f2Sharp = loadSound("F2Sharp.mp3");
  G2 = loadSound("G2.mp3");
  g2Sharp = loadSound("G2Sharp.mp3");
}


//assign each note to a key on the keyboard
function keyPressed() {
  if (keyCode === 65) {
    A.play();
  }
  else if (keyCode === 53) {
    aSharp.play();
  }
  else if (keyCode === 66) {
    B.play();
  }
  else if (keyCode === 67) {
    C.play();
  }
  else if (keyCode === 49) {
    cSharp.play();
  }
  else if (keyCode === 68) {
    D.play();
  }
  else if (keyCode === 50) {
    dSharp.play();
  }
  else if (keyCode === 69) {
    E.play();
  }
  else if (keyCode === 70) {
    F.play();
  }
  else if (keyCode === 51) {
    fSharp.play();
  }
  else if (keyCode === 71) {
    G.play();
  }
  else if (keyCode === 52) {
    gSharp.play();
  }
}