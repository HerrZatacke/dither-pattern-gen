import generatePattern from '../generatePattern.mjs';

const defaultPalette = {
  black: 0x00,
  darkGray: 0x55,
  lightGray: 0xaa,
  white: 0xff,
};

const ditherFilter = (imageData, pattern) => {
  let pixelCount = 0;
  const ditheredImageData = new ImageData(imageData.width, imageData.height);

  const { black, darkGray, lightGray, white } = defaultPalette;

  const width = imageData.width;
  const pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const x = (pixelCount % width) % 4;
    const y = Math.ceil(pixelCount / width) % 4;

    let p = pixels[i];
    const ditherGroup = pattern[y][x];

    if (p < ditherGroup[0]) {
      p = black;
    } else if (p < ditherGroup[1]) {
      p = darkGray;
    } else if (p < ditherGroup[2]) {
      p = lightGray;
    } else {
      p = white;
    }

    ditheredImageData.data[i] = p;
    ditheredImageData.data[i + 1] = p;
    ditheredImageData.data[i + 2] = p;
    ditheredImageData.data[i + 3] = 255;
    pixelCount += 1;
  }

  return ditheredImageData;
};

const applyBitmapFilter = ({
  targetCanvas,
  originalCanvas,
  imageData,
  orderPatterns,
  baseValues,
}) => {
  const patterns = generatePattern({
    orderPatterns,
    baseValues,
  });

  const context = targetCanvas.getContext('2d');
  context.putImageData(ditherFilter(imageData, patterns), 0, 0);
  const originalContext = originalCanvas.getContext('2d');
  originalContext.putImageData(imageData, 0, 0);
};

export default applyBitmapFilter;
