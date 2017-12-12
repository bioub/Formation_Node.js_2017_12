const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg) => {
  const now = new Date();
  const line = `[${now.toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
};

console.time('Logs Done');
console.time('Thread idle');

fs.stat(dirPath)
  .catch(err => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(dirPath);
    }
    throw err;
  })
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => {
    console.timeEnd('Logs Done');
  })
  .catch(err => {
    console.log(err.message);
  });

console.timeEnd('Thread idle');
