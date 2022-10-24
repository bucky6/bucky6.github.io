// Colliding Circles
// Bucky Pederson-Bradbury
// October 24, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // move
  for (let i = 0; i < theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;
  }

  // display
  for (let thisCircle of theCircles) {
    fill(thisCircle.circleColour);
    circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
  }
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    circleColour: color(random(255), random(255), random(255), random(255)) 
  };

}