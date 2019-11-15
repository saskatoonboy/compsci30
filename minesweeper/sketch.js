// Mine Sweeper
// Eric James
// Nov. Fri. 15th 2019
//
// Classic minesweeper game
//
// Extra for Experts:
// - I used classes

let grid;
let bombsUnFlagged;
let bombChance = 0.1;
let playing = true;
let toClear = [];

function setup() {
  createCanvas(windowWidth, windowHeight)

  document.addEventListener("contextmenu", event => event.preventDefault());

  grid = new Grid(25, 25);
  bombsUnFlagged = grid.totalBombs;
}

function clearCells() {
  for (cell of toClear) {
    cell.clearCell();
  }
  toClear = [];
}

function draw() {
  background(255);
  clearCells();
  if (playing) {
    grid.display();
  }
}

function mousePressed() {
  if (playing) {
    let clickedCell = grid.getCell(mouseX, mouseY);
    if (clickedCell !== undefined) {
      if (mouseButton === LEFT) {
        if (!clickedCell.isFlagged()) {
          if (!clickedCell.clearCell()) {
            endGame();
          }
        }
      } else if (mouseButton === RIGHT) {
        if (!clickedCell.isClear()) {
          clickedCell.toggleFlag();
        }
      }
  
      return false;
    }
  
    return true;
  }
}

function endGame() {
  playing = false;
}

class Cell {
  constructor(isBomb, x, y) {
    this.x = x;
    this.y = y;
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
    if (this.isBomb()) {
      if (this.isFlagged()) {
        
      }
    }
  }

  setValue(value) {
    this.value = value;
  }

  clearCell() {
    this.clear = true;            
    if (this.getValue() === 0) {
      for (let xOffset = -1; xOffset < 2; xOffset++) {
        for (let yOffset = -1; yOffset < 2; yOffset++) {
          if (this.x - xOffset >= 0 && this.y - yOffset >= 0 && this.x - xOffset < grid.columns && this.y - yOffset < grid.rows) {
            let sideCell = grid.table[this.x - xOffset][this.y - yOffset];
            if (!sideCell.isClear()) {
              toClear.push(sideCell);
            }
          }
        }
      }
    }
    return !this.bomb;
  }
}

class Grid {
  constructor(rows, columns) {
    this.colours = [[200, 200, 200], [255, 0, 0], [255, 255, 0], [150, 255, 0], [0, 255, 0], [0, 0, 255], [255, 0, 255], [252, 3, 161]]
    this.rows = rows;
    this.columns = columns;
    this.totalBombs = 0;
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
          this.totalBombs ++;
        } else {
          isBomb = false;
        }

        this.table[x].push(new Cell(isBomb, x, y));
      }
    }

    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        let cell = this.table[x][y];

        let value = 0;

        if (cell.value > -1) {
          for (let xOffset = -1; xOffset < 2; xOffset++) {
            for (let yOffset = -1; yOffset < 2; yOffset++) {
              if (x - xOffset >= 0 && y - yOffset >= 0 && x - xOffset < this.columns && y - yOffset < this.rows) {
                if (this.table[x - xOffset][y - yOffset].isBomb()) {
                  value ++;
                }
              }
            }
          }
        }

        cell.setValue(value);
      }
    }
  }

  display() {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        let cell = this.table[x][y];
        
        if (cell.isClear()) {
          fill(200);
        } else {
          if (cell.isFlagged()) {
            fill(0, 255, 0);
          } else {
            fill(255);
          }
        }

        rect(x*this.cellSize, y*this.cellSize, this.cellSize, this.cellSize);
        let value = cell.getValue();

        if (value > -1 && cell.isClear()) {
          fill(this.colours[value][0], this.colours[value][1], this.colours[value][2]);
          textSize(24);
          text(value, x*this.cellSize+this.cellSize*0.25, y*this.cellSize + this.cellSize * 0.90);
        }
      }
    }
  }

  getCell(x, y) {
    if (x <= this.cellSize*this.columns && y <= this.cellSize*this.rows) {
      return this.table[floor(x/this.cellSize)][floor(y/this.cellSize)];
    }
  }
}
