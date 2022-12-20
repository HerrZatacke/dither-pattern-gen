const generatePattern = ({
  baseValues,
  orderPattern,
}) => {
  const pattern = [];

  for (let x = 0; x < 4; x += 1) {
    const xDim = [];
    pattern.push(xDim);
    for (let y = 0; y < 4; y += 1) {
      const yDim = [];
      xDim.push(yDim);
      for (let z = 0; z < 3; z += 1) {
        yDim.push(baseValues[z][orderPattern[(x * 4) + y]]);
      }
    }
  }

  return pattern;
};

export default generatePattern;