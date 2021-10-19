const fs = require('fs');
const csv = require('csvtojson');

async function transformData() {
  const jsonArray = await csv().fromFile('./collection.csv');
  fs.writeFileSync(
    './src/static/collection.json',
    JSON.stringify(jsonArray),
    'utf-8'
  );
}

transformData();
