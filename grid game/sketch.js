// Mastermind
// Bucky Pederson-Bradbury
// October 28, 2022
//
// 

let rows = 12;
let cols = 10;
let grid;
let cellWidth, cellHeight;
let colourState = "grey";
let answer;
let turn = 1;
let choiceArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
  grid = create2DArray(cols, rows);
  let colours = ["yellow", "green", "blue", "red", "purple", "black", "white"];
  let a = random(colours);
  let b = random(colours);
  let c = random(colours);
  let d = random(colours);
  let e = random(colours);
  answer = [a, b, c, d, e];
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

// set up the colour switching when mouse is pressed, providing the mouse is within a certain area
function mousePressed() {
  if (mouseX < width/2 && mouseY < turn*cellHeight) {
    console.log(mouseX, mouseY);
    let cellWidth = width/grid[0].length;
    let cellHeight = height/grid.length;

    let x = Math.floor(mouseX/cellWidth);
    let y = Math.floor(mouseY/cellHeight);

    if (grid [y][x] === 0) {
      grid[y][x] = 1;
      colourState = "yellow";
      choiceArray.push("yellow");
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 2;
      colourState = "green";
      choiceArray.push("green");
    }
    else if (grid[y][x] === 2) {
      grid[y][x] = 3;
      colourState = "blue";
      choiceArray.push("blue");
    }
    else if (grid[y][x] === 3) {
      grid[y][x] = 4;
      colourState = "red";
      choiceArray.push("red");
    }
    else if (grid[y][x] === 4) {
      grid[y][x] = 5;
      colourState = "purple";
      choiceArray.push("purple");
    }
    else if (grid[y][x] === 5) {
      grid[y][x] = 6;
      colourState = "black";
      choiceArray.push("black");
    }
    else if (grid[y][x] === 6) {
      grid[y][x] = 7;
      colourState = "white";
      choiceArray.push("white");
    }
    else if (grid[y][x] === 7) {
      grid[y][x] = 1;
      colourState = "yellow";
    }
  }
}

// set the enter key as the button to enter choices
function keyPressed() {
  if (keyCode === ENTER) {
    turn++;
    choiceArray = [];
  }
}

// for (let i = 0; i < answer.length; i++) {
//   for (let j = 0; j < choiceArray.length; j++) {
//     if (i[answer] === j[choiceArray]) {
      
//     }
//   }
// }

// store player's choice in an array
// function addChoice() {
//   choiceArray = [];
//   for (let i=0; i<turn; i++) {
//     for (let x=0; x<cols/2; x++) {
//       if (colourState === "yellow") {
//         choiceArray.push("yellow");
//       }
//       else if (colourState === "green") {
//         choiceArray.push("green");
//       }
//       else if (colourState === "blue") {
//         choiceArray.push("blue");
//       }
//       else if (colourState === "red") {
//         choiceArray.push("red");
//       }
//       else if (colourState === "purple") {
//         choiceArray.push("purple");
//       }
//       else if (colourState === "black") {
//         choiceArray.push("black");
//       }
//       else if (colourState === "white") {
//         choiceArray.push("white");
//       }
//     }  
//   }
// }

// to do:
// add button for player to enter choice (done)
// create an ai to choose the colours (done)
// limit colour picking to the row corresponding to the turn (done)

// work out "right place right colour", "right colour wrong place" 
// set up different screens
// make it look nicer
// store colours that the player picked in an array-- make a new array for every turn