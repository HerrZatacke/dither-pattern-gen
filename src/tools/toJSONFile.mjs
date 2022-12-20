import fs from 'fs';

const toJSONFile = (patterns) => {
  fs.writeFileSync('out/data.json', JSON.stringify(patterns, null, 2), { encoding: 'utf-8' });
};

export default toJSONFile;
