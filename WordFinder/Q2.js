function findWords(grid, row, col, word, pos, path) {

  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
    return false


  if (word[pos] !== grid[row][col])
    return false;

  path.push(`(${row}, ${col})`);
  if (pos === (word.length - 1)) {
    return path
  }

  if (findWords(grid, row + 1, col, word, pos + 1, path) || findWords(grid, row, col + 1, word, pos + 1, path)) {
    return path;
  }
  path.pop();

}


var grid = [
  ['c', 'c', 'x', 't', 'i', 'b'],
  ['c', 'c', 'a', 't', 'n', 'i'],
  ['a', 'c', 'n', 'n', 't', 't'],
  ['t', 'c', 's', 'i', 'p', 't'],
  ['a', 'o', 'o', 'o', 'a', 'a'],
  ['o', 'a', 'a', 'a', 'o', 'o'],
  ['k', 'a', 'i', 'c', 'k', 'i'],
]
word = "catnip"
// word = "cccc"
// word = "s"  
// word = "bit"
// word = "aoi"
// word = "ki"
// word = "aaa"
// word = "ooo"



function getLocations(grid, word) {
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === word[0]) {
        const path = findWords(grid, i, j, word, 0, []);
        if (path) {
          result.push(path);
          break;
        }
      }
    }
  }
  console.log(result[0]);
}

getLocations(grid, word)