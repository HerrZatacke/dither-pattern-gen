import fs from 'fs';
import generatePattern from './generatePattern.mjs';
import generateBaseValues from './generateBaseValues.mjs';
import {
  ditherHighLightValues,
  ditherLowLightValues,
  ditherUnused2BCA0,
} from './data/patternBases.mjs';
import { orderPatternDither } from './data/orderPatterns.mjs';
import sortPattern from './tools/sortPattern.mjs';

import toPGM from './tools/toPGM.mjs';
import toJSONFile from './tools/toJSONFile.mjs';
import { toC } from './tools/toC.mjs';

const patternBases = {
  ditherHighLightValues,
  ditherLowLightValues,
  ditherUnused2BCA0,
}

const patterns = Object.keys(patternBases)
  .map((patternGroupName) => (
    patternBases[patternGroupName].map((values) => {
      const baseValues = generateBaseValues(values);

      return (
        generatePattern({
          baseValues,
          orderPatterns: [
            orderPatternDither,
            orderPatternDither,
            orderPatternDither,
          ],
        })
      );
    })
  ));

toJSONFile(patterns);
toPGM(patterns.flat(1).map(sortPattern));
toC(fs)(patterns);
