const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg) => {
  const now = new Date();
  const line = `[${now.toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
};

console.time('Logs Done');
console.time('Thread idle');

try {
  try {
    const stats = fs.statSync(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(dirPath);
    }
    else {
      throw err;
    }
  }

  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
}
catch (err) {
  console.log(err);
}

console.timeEnd('Thread idle');
console.timeEnd('Logs Done');
