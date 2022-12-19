const generateValueRange = (from, to) => {
  const step = (to - from) / 16;
  return (new Array(16))
    .fill(null)
    .map((_, index) => (
      Math.floor(from + step * index)
    ));
}

const generateBaseValues = ([a, b, c, d]) => {
  return [
    generateValueRange(a, b),
    generateValueRange(b, c),
    generateValueRange(c, d),
  ]
};

module.exports = generateBaseValues;
