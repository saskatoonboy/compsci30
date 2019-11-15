// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let bombsUnFlagged;
let bombChance = 0.05;
let playing = true;
let toClear = [];
let won = false;
let maxBombs = 50;

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
  print(bombsUnFlagged);
  background(255);
  clearCells();
  if (playing) {
    grid.display();
  } else if (won) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("You Win", width/2, height/2);
  } else {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("You Lost", width/2, height/2);
  }
}

function mousePressed() {
  if (playing) {
    let clickedCell = grid.getCell(mouseX, mouseY);
    if (clickedCell !== undefined) {
      if (mouseButton === LEFT) {
        if (!clickedCell.isFlagged()) {
          if (!clickedCell.clearCell()) {
            loseGame();
          }
        }
      } else if (mouseButton === RIGHT) {
        if (!clickedCell.isClear()) {
          clickedCell.toggleFlag();
          if (bombsUnFlagged < 1) {
            winGame();
          }
        }
      }
  
      return false;
    }
  
    return true;
  }
}

function loseGame() {
  playing = false;
}

function winGame() {
  playing = false;
  won = true;
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
        bombsUnFlagged --;
      } else {
        bombsUnFlagged ++;
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
        this.table[x].push(new Cell(false, x, y));
      }
    }

    for (let bombCount = 0; bombCount < maxBombs; bombCount++) {
      let x = floor(random(0, this.columns));
      let y = floor(random(0, this.rows));
      if (!this.table[x][y].isBomb()) {
        this.totalBombs++;
      }
      this.table[x][y].bomb = true;
      this.table[x][y].value = -1;
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
