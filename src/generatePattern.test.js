import generatePattern from './generatePattern.mjs';
import generateBaseValues from './generateBaseValues.mjs';

import {
  ditherLowLightValues as ditherLowLightValuesReference,
  ditherHighLightValues as ditherHighLightValuesReference,
  ditherNoLowLightValues as ditherNoLowLightValuesReference,
  ditherNoHighLightValues as ditherNoHighLightValuesReference,
} from '../reference/patterns.mjs';
import {
  ditherLowLightValues,
  ditherHighLightValues,
} from './data/patternBases.mjs';
import { orderPatternDither, orderPatternNoDither } from './data/orderPatterns.mjs';

test('Low Light Ditherpatterns match original values', () => {
  const result = ditherLowLightValues.map((values) => {
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

  expect(result).toStrictEqual(ditherLowLightValuesReference);
});

test('High Light Ditherpatterns match original values', () => {
  const result = ditherHighLightValues.map((values) => {
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

  expect(result).toStrictEqual(ditherHighLightValuesReference);
});

test('Low Light Non-Ditherpatterns match original values', () => {
  const result = ditherLowLightValues.map((values) => {
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

  expect(result).toStrictEqual(ditherNoLowLightValuesReference);
});

test('High Light Non-Ditherpatterns match original values', () => {
  const result = ditherHighLightValues.map((values) => {
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

  expect(result).toStrictEqual(ditherNoHighLightValuesReference);
});
