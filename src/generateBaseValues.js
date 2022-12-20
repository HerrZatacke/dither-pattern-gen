const generateValueRange = (start, end) => {
  const step = (end - start) / 16;
  return (new Array(16))
    .fill(null)
    .map((_, index) => (
      Math.floor(start + (step * index))
    ));
};

const generateBaseValues = ([a, b, c, d]) => ([
  generateValueRange(a, b),
  generateValueRange(b, c),
  generateValueRange(c, d),
]);

module.exports = generateBaseValues;
