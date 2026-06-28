const fs = require('fs');

const csv = fs.readFileSync('clinics.csv', 'utf8');
const lines = csv.trim().split('\n');
const headers = lines[0].split(',');

const data = lines.slice(1).map(line => {
  const values = line.split(',');
  const obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = values[i] ? values[i].trim() : '';
  });
  return obj;
});

fs.mkdirSync('./app/src/data', { recursive: true });
fs.writeFileSync('./app/src/data/clinics.json', JSON.stringify(data, null, 2));
console.log('Successfully wrote ' + data.length + ' clinics to JSON.');
