// const patterns = require('../reference/patterns.js');
const patternBases = require('./data/patternBases.js');
const { orderPatternDither, orderPatternNoDither } = require('./data/orderPatterns.js');
const generatePattern = require('./generatePattern.js');
const generateBaseValues = require('./generateBaseValues.js');
const sortPattern = require('./tools/sortPattern.js');

const toPGM = require('./tools/toPGM.js');
const toJSONFile = require('./tools/toJSONFile.js');
const toC = require('./tools/toC.js');

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
