const fs = require('fs');

const toPGMLine = (line) => {
  const lineText = (new Array(512)).fill('1')

  line.forEach((shade, color) => {
    shade.forEach((value) => {
      lineText[value] = (color * 2) + 3;
    })
  })

  return lineText.join(' ');
};

const toPGM = (patterns) => {
  const pgmHead = `P2\n256 ${patterns.length * 2}\n7`;

  const pgmData = patterns.map(toPGMLine).join('\n');

  fs.writeFileSync('out/distribution.pgm', `${pgmHead}\n${pgmData}`, { encoding: 'utf-8' });
};

module.exports = toPGM;
