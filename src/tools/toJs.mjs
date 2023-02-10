export const patternToJs = (pattern) => (
  `    [ ${
    pattern.flat(Infinity).map((value) => (
      value
    )).join(', ')
  } ]`
);
