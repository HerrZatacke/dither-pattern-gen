const fs = require('fs');

const toJSONFile = (patterns) => {
  fs.writeFileSync('out/data.json', JSON.stringify(patterns, null, 2), { encoding: 'utf-8' });
};

module.exports = toJSONFile;
