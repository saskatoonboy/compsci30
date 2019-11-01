// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let bombsUnFlagged;
let bombChance = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight)
}


function draw() {

}

function mouseClicked() {

}

class Cell {
  constructor(isBomb) {
    this.bomb = isBomb;
    this.flag = false;
    this.clear = false;
    if (isBomb) {
      this.value = -1;
    } else {
      this.value = 0;
    }
  }

  isFlagged() {
    return this.flag;
  }

  isClear() {
    return this.clear;
  }

  isBomb() {
    return this.bomb;
  }

  getValue() {
    return this.value;
  }

  toggleFlag() {
    this.flag = !this.flag;
  }

  setValue(value) {
    this.value = value;
  }

  clear() {
    this.clear = true;
    return !this.bomb;
  }
}

class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    if (width < height) {
      this.cellSize = width/columns;
    } else {
      this.cellSize = height/rows;
    }
    this.table = [];

    for (let x = 0; x < columns; x++) {
      this.table.push([]);
      for (let y = 0; y < rows; y++) {
        let isBomb;
        if (random(0,1) < bombChance) {
          isBomb = true;
        } else {
          isBomb = false;
        }

        this.table[x].push(new Cell(isBomb));
      }
    }
  }

  display() {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        let cell = this.table[x][y];
        if (cell.isClear()) {

        } else {
          if (cell.isFlagged()) {
            
          }
        }
      }
    }
  }
}
