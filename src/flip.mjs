const flip = (values) => values[0].map((_, colIndex) => (
  values.map(row => row[colIndex])
));

export default flip;
