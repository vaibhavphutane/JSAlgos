const findAllWordLocations = (grid, word) => {
  const paths = []
  const traverse_path = (row, col, remainingWord, currentPath) => {
      if (!grid[row] || !grid[row][col] || grid[row][col] !== remainingWord[0]) {
          return
      }
      if (grid[row][col] == remainingWord) {
          paths.push(currentPath)
          return
      }
      traverse_path(row, col + 1, remainingWord.substring(1), [...currentPath, `(${row}, ${col + 1})`])
      traverse_path(row + 1, col, remainingWord.substring(1), [...currentPath, `(${row + 1}, ${col})`])
  }
  for (let i = 0; i < grid.length; i++)
      for (let j = 0; j < grid[i].length; j++)
          traverse_path(i, j, word, [`(${i}, ${j})`])
  return paths
}


const findWordLocations = (grid, words) => {
  const allPathsForEachWord = []
  for (let word of words) {
      const paths = findAllWordLocations(grid, word)
      allPathsForEachWord.push(paths)
  }

  const usedLocations = new Set()
  const result = []

  const pickPathForNextWord = () => {
      if (result.length === words.length)
          return
      const allPathsofWord = allPathsForEachWord[result.length]
      for (let path of allPathsofWord) {
          let overRidesPath = false
          for (let index = 0; index < path.length; index++) {
              const location = path[index]
              if (usedLocations.has(location)) {
                  for (let i = 0; i < index; i++) {
                      usedLocations.delete(path[i])
                  }
                  overRidesPath = true
                  break
              }
              usedLocations.add(location)
          }
          if (!overRidesPath) {
              result.push(`[${path.join(', ')}]`)
              pickPathForNextWord()
              if (result.length === words.length) {
                  return
              }
              result.pop()
              path.forEach(location => usedLocations.delete(location))
          }
      }
  }

  pickPathForNextWord()


  return result.join(',\n')
}

grid21 =[
  ['A', 'B', 'A', 'B'],
  ['B', 'A', 'B', 'A'],
  ['A', 'B', 'Y', 'B'],
  ['B', 'Y', 'A', 'A'],
  ['A', 'B', 'B', 'A'],
]
words2_1 = ['ABABY', 'ABY', 'AAA', 'ABAB', 'BABB']

console.log(findWordLocations(grid21, words2_1))
