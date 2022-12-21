import generatePattern from './generatePattern.mjs';
import generateBaseValues from './generateBaseValues.mjs';

import refPatterns from '../reference/patterns.mjs';
import patternBases from './data/patternBases.mjs';
import { orderPatternDither, orderPatternNoDither } from './data/orderPatterns.mjs';

test('Low Light Ditherpatterns match original values', () => {
  const result = patternBases.ditherLowLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPatterns: [
        orderPatternDither,
        orderPatternDither,
        orderPatternDither,
      ],
    });
  });

  expect(result).toStrictEqual(refPatterns.ditherLowLightValues);
});

test('High Light Ditherpatterns match original values', () => {
  const result = patternBases.ditherHighLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPatterns: [
        orderPatternDither,
        orderPatternDither,
        orderPatternDither,
      ],
    });
  });

  expect(result).toStrictEqual(refPatterns.ditherHighLightValues);
});

test('Low Light Non-Ditherpatterns match original values', () => {
  const result = patternBases.ditherNoLowLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPatterns: [
        orderPatternNoDither,
        orderPatternNoDither,
        orderPatternNoDither,
      ],
    });
  });

  expect(result).toStrictEqual(refPatterns.ditherNoLowLightValues);
});

test('High Light Non-Ditherpatterns match original values', () => {
  const result = patternBases.ditherNoHighLightValues.map((values) => {
    const baseValues = generateBaseValues(values);
    return generatePattern({
      baseValues,
      orderPatterns: [
        orderPatternNoDither,
        orderPatternNoDither,
        orderPatternNoDither,
      ],
    });
  });

  expect(result).toStrictEqual(refPatterns.ditherNoHighLightValues);
});
