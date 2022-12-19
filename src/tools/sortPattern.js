const sortPattern = (pattern) => {
  const shades = [[], [], []];

  for (let x = 0; x < 4; x += 1) {
    for (let y = 0; y < 4; y += 1) {
      for (let z = 0; z < 3; z += 1) {
        shades[z].push(pattern[x][y][z]);
      }
    }
  }

  for (let z = 0; z < 3; z += 1) {
    shades[z] = shades[z].sort();
  }

  return shades;
}

module.exports = sortPattern;
