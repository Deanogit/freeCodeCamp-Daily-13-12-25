// Game of Life
// Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

// Each cell is either 1 (alive) or 0 (dead).
// A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
// Cells on the edges have fewer than eight neighbors.
// Rules for updating each cell:

// Any live cell with fewer than two live neighbors dies (underpopulation).
// Any live cell with two or three live neighbors lives on.
// Any live cell with more than three live neighbors dies (overpopulation).
// Any dead cell with exactly three live neighbors becomes alive (reproduction).
// For example, given:

// [
//   [0, 1, 0],
//   [0, 1, 1],
//   [1, 1, 0]
// ]
// return:

// [
//   [0, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]
// Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.

function gameOfLife(grid) {
  console.log(grid);
  const rows = grid.length;
  const cols = grid[0].length;
  const result = [];
  for (let row = 0; row < rows; row++) {
    const resultRow = [];
    for (let col = 0; col < cols; col++) {
      const resultCol = [];
      let neighbours = 0;
      const locations = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      // loop over locations
      for (const [lr, lc] of locations) {
        const r = row + lr;
        const c = col + lc;
        // check
        if (grid[r]?.[c] === 1) {
          // console.log(`Checking (${r}, ${c})`);

          neighbours++;
        }
      }

      const cell = grid[row][col];
      let nextCell = 0;

      // Apply game of life rules
      if (cell === 1) {
        if (neighbours < 2 || neighbours > 3) {
          nextCell = 0; // dies
        } else {
          nextCell = 1; // lives
        }
      } else {
        if (neighbours === 3) {
          nextCell = 1; // becomes alive
        } else {
          nextCell = 0; // stays dead
        }
      }

      resultRow.push(nextCell);
    }
    result.push(resultRow);
  }

  return result;
}

// working on 1d first

function nextGen1D(cells) {
  const test = [];
  cells.forEach((x, i) => {
    let neighbours = 0;
    if (cells[i - 1] === 1) neighbours++;
    if (cells[i + 1] === 1) neighbours++;
    if (x === 1) {
      if (neighbours === 1) {
        test.push(1);
      } else {
        test.push(0);
      }
    } else if (x === 0) {
      if (neighbours === 2) {
        test.push(1);
      } else {
        test.push(0);
      }
    }
  });
}
