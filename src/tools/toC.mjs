export const patternToC = (pattern) => (
  `    { ${
    pattern.flat(Infinity).map((value) => (
      `0x${value.toString(16).padStart(2, '0').toUpperCase()}`
    )).join(', ')
  } }`
);

export const groupToC = (fs) => (patterns, index) => {
  const patternC = patterns
    .map(patternToC)
    .join(',\n');

  fs.writeFileSync(`out/dither_pattern_${index}.c`, `{\n${patternC}\n }`);
};

export const toC = (fs) => (groups) => {
  groups.forEach(groupToC(fs));
};
