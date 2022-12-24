import { flip } from '../../../../generatePatternBaseValues.mjs';

const colors = [
  '#666666',
  '#AAAAAA',
  '#FFFFFF',
];

export const boundaryColors = [
  '#22FF22',
  '#FFFF44',
  '#44FFFF',
  '#ff44ff',
];

export const drawPattern = ({
  canvas,
  values,
  boundaries,
}) => {
  const context = canvas.getContext('2d', {
    willReadFrequently: true,
    alpha: false,
  });
  context.fillStyle = '#222222';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  for (let x = 0; x <= 256; x += 1) {
    context.fillStyle = (x % 8) ? '#224455' : '#446699';
    context.fillRect((x * 4) + 7, 7, 1, context.canvas.height - 14);
  }

  values.forEach((line, y) => {
    line.forEach((shade, color) => {
      shade.forEach((value) => {
        context.fillStyle = colors[color];
        context.fillRect((value * 4) + 8, (y * 8) + 8, 3, 3);
      });
    });
  });

  flip(boundaries)
    .forEach((boundaryValues, color) => {
      context.fillStyle = boundaryColors[color];
      context.strokeStyle = boundaryColors[color];

      boundaryValues.forEach((boundaryValue, y) => {
        if (y > 0) {
          context.beginPath();
          context.moveTo((boundaryValues[y - 1] * 4) + 9, ((y - 1) * 8) + 9);
          context.lineTo((boundaryValue * 4) + 9, (y * 8) + 9);
          context.stroke();
        }
      });
    });
};
