const fs = require('fs');

const toC = (patterns) => {
  patterns.forEach((pattern, index) => {
    const patternC = pattern
      .map((group) => (
        `    { ${
          group.flat(Infinity).map((value) => (
            `0x${value.toString(16).toUpperCase()}`
          )).join(', ')
        } }`
      ))
      .join(',\n');

    fs.writeFileSync(`out/dither_pattern_${index}.c`, `{\n${patternC}\n }`);
  })
}

module.exports = toC;
