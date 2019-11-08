// First Project
// Eric James
// Sept. Thrus. 5th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let my_grid;

function setup() {
  createCanvas(windowWidth, windowHeight)
  my_grid = new Grid(20, 20, "cell", [false, 25, 25]);
}


function draw() {
  my_grid.display();
  if (key === " ") {
    update();
  } else {
    my_grid.update();
  }
}

function mouseClicked() {
  let testCell = my_grid.get(0, 0);
  let w = testCell.width;
  let h = testCell.height;
  
  let x = floor(mouseX / w);
  let y = floor(mouseY / h);

  my_grid.set(x, y, !my_grid.get(x, y).alive)
}

function update() {
  my_grid.update();
}

class Cell {
  constructor(cellType, cellData) {
    this.type = cellType;
    if (cellType === "cell") {
      this.alive = cellData[0];
      this.width = cellData[1];
      this.height = cellData[2];
    }
  }

  getColor() {
    let r = 0;
    let g = 0;
    let b = 0;
    if (this.type === "cell") {
      if (!this.alive) {
        r = 255;
        g = 255;
        b = 255;
      } 
    }

    return r, g, b;
  }

  getSize() {
    return this.height, this.width;
  }

  getData() {
    return [this.alive, this.width, this.height];
  }

  set(alive) {
    this.alive = alive;
  }
}

class Grid {
  constructor(width, height, cellType, cellData) {
    this.grid = []
    this.new_grid = []
    this.width = width;
    this.height = height;
    for (let i = 0; i < width; i++) {
      this.grid.push([]);
      for (let j = 0; j < height; j++) {
        this.grid[i].push(new Cell(cellType, cellData));
      }
    }

    for (let i = 0; i < width; i++) {
      this.new_grid.push([]);
      for (let j = 0; j < height; j++) {
        this.new_grid[i].push(new Cell(cellType, cellData));
      }
    }
  }

  get(x, y) {
    return this.grid[x][y];
  }

  set(x, y, value) {
    this.new_grid[x][y].set(value);
  }

  display() {

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let cell = this.grid[x][y];
        let w = cell.width;
        let h = cell.height;

        fill(cell.getColor());

        rect(x * w, y * h, w, h);
      }
    }
  }

  update() {
    this.grid = this.new_grid;

    this.new_grid = []
    for (let i = 0; i < width; i++) {
      this.new_grid.push([]);
      for (let j = 0; j < height; j++) {
        this.new_grid[i].push(new Cell(this,grid[i][j].type, this.grid[i][j].getData()));
      }
    }
  }
}
