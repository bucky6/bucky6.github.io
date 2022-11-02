// Mastermind
// Bucky Pederson-Bradbury
// October 28, 2022
//
// 

let rows = 12;
let cols = 7;
let grid;
let cellWidth;
let cellHeight;
let state = "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
  grid = create2DArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid);
}


// display the grid and set the order of colours
function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("grey");
      }
      else if (grid[y][x] === 1) {
        fill("yellow");
      }
      else if (grid[y][x] === 2) {
        fill("green");
      }
      else if (grid[y][x] === 3) {
        fill("blue");
      }
      else if (grid[y][x] === 4) {
        fill("red");
      }
      else if (grid[y][x] === 5) {
        fill("purple");
      }
      else if (grid[y][x] === 6) {
        fill("black");
      }
      else if (grid[y][x] === 7) {
        fill("white");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

// make the grid
function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols;x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

// set up the colour switching when mouse is pressed
function mousePressed() {
  console.log(mouseX, mouseY);
  let cellWidth = width/grid[0].length;
  let cellHeight = height/grid.length;

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid [y][x] === 0) {
    grid[y][x] = 1;
    state = "yellow";
  }
  else if (grid[y][x] === 1) {
    grid[y][x] = 2;
    state = "green";
  }
  else if (grid[y][x] === 2) {
    grid[y][x] = 3;
    state = "blue";
  }
  else if (grid[y][x] === 3) {
    grid[y][x] = 4;
    state = "red";
  }
  else if (grid[y][x] === 4) {
    grid[y][x] = 5;
    state = "purple";
  }
  else if (grid[y][x] === 5) {
    grid[y][x] = 6;
    state = "black";
  }
  else if (grid[y][x] === 6) {
    grid[y][x] = 7;
    state = "white";
  }
  else if (grid[y][x] === 7) {
    grid[y][x] = 1;
    state = "yellow";
  }
}

// store player's choice in an array
let choiceArray = [];
function addChoice() {
  if (state === "yellow") {
    choiceArray.push("yellow");
  }
}

// to do:
// add button for player to enter choice
// store colours that the player picked in an array
// create an ai to choose the colours 
// work out "right place right colour", "right colour wrong place" 
// limit colour picking to the row corresponding to the turn
// 