// Perlin Noise Demo
// Bucky Pederson Bradury
// October 19, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircles = [];

let x;
let y;
let radius;
let xtime = 0;
let ytime = 0;

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000)  
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 75;
}

function draw() {
  background(220);
  fill("black");

  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time) * height;
    allCircles[i].time += 0.01;

    circle(allCircles[i].x, allCircles[i].y, allCircles[i]);
  }

  // xtime += 0.01;
  // ytime += 0.015;

  // y = random(height);
  circle(x, y, radius*2);
}
