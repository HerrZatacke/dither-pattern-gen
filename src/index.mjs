import generatePattern from './generatePattern.mjs';
import generateBaseValues from './generateBaseValues.mjs';
import patternBases from './data/patternBases.mjs';
import { orderPatternDither, orderPatternNoDither } from './data/orderPatterns.mjs';
import sortPattern from './tools/sortPattern.mjs';

import toPGM from './tools/toPGM.mjs';
import toJSONFile from './tools/toJSONFile.mjs';
import toC from './tools/toC.mjs';

const patterns = Object.keys(patternBases)
  .map((patternGroupName) => (
    patternBases[patternGroupName].map((values) => {
      const baseValues = generateBaseValues(values);

      const orderPattern = patternGroupName.indexOf('No') !== -1 ?
        orderPatternNoDither :
        orderPatternDither;

      return (
        generatePattern({
          baseValues,
          orderPattern,
        })
      );
    })
  ));

toJSONFile(patterns);
toPGM(patterns.flat(1).map(sortPattern));
toC(patterns);
