import generateBaseValues from "./generateBaseValues.mjs";

export const flip = (values) => values[0].map((_, colIndex) => (
  values.map(row => row[colIndex])
));

export const generatePatternBaseValues = (values) => {
  return flip(values).map(generateBaseValues);
};
