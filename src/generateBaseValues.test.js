const { generateBaseValues } = require('./generateBaseValues');

// Manually created pattern from original ditherLowLightValues[0]
const valuesAB = [128, 129, 130, 131, 133, 134, 135, 136, 138, 139, 140, 141, 143, 144, 145, 146];
const valuesBC = [148, 152, 157, 161, 166, 170, 175, 179, 184, 188, 193, 197, 202, 206, 211, 215];
const valuesCD = [220, 222, 224, 226, 228, 230, 233, 235, 237, 239, 241, 244, 246, 248, 250, 252];

test('Generated base values match original data', () => {
  expect(generateBaseValues([128, 148, 220, 255]))
    .toStrictEqual([valuesAB, valuesBC, valuesCD]);
});
