const generatePattern = require('./generatePattern');
const refPatterns = require('../reference/patterns.js');
const generateBaseValues = require("./generateBaseValues");
const patternBases = require('./data/patternBases.js');
const { orderPatternDither, orderPatternNoDither } = require('./data/orderPatterns.js');

test('Low Light Ditherpatterns match original values', () => {
  const result = patternBases.ditherLowLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPattern: orderPatternDither,
    })
  })

  expect(result).toStrictEqual(refPatterns.ditherLowLightValues);
});

test('High Light Ditherpatterns match original values', () => {
  const result = patternBases.ditherHighLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPattern: orderPatternDither,
    })
  })

  expect(result).toStrictEqual(refPatterns.ditherHighLightValues);
});

test('Low Light Non-Ditherpatterns match original values', () => {
  const result = patternBases.ditherNoLowLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPattern: orderPatternNoDither,
    })
  })

  expect(result).toStrictEqual(refPatterns.ditherNoLowLightValues);
});

test('High Light Non-Ditherpatterns match original values', () => {
  const result = patternBases.ditherNoHighLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPattern: orderPatternNoDither,
    })
  })

  expect(result).toStrictEqual(refPatterns.ditherNoHighLightValues);
});
