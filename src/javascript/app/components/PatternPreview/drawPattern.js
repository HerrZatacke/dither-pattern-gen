
const colors = [
  '#666666',
  '#AAAAAA',
  '#FFFFFF',
];

const drawPattern = ({
  canvas,
  values,
}) => {
  const context = canvas.getContext('2d', {
    willReadFrequently: true,
    alpha: false,
  });
  context.fillStyle = '#222222';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  for (let x = 0; x <= 256; x += 1) {
    context.fillStyle = (x % 8) ? '#224455' : '#446699';
    context.fillRect((x * 4) + 7, 4, 1, context.canvas.height - 8);
  }

  values.forEach((line, y) => {
    line.forEach((shade, color) => {
      shade.forEach((value) => {
        context.fillStyle = colors[color];
        context.fillRect((value * 4) + 8, (y * 4) + 8, 3, 3);
      });
    });
  });
};

export default drawPattern;
