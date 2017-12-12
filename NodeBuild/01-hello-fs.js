const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const log = (filePath, msg, cb) => {
  const now = new Date();
  const line = `[${now.toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
};

console.time('Logs Done');
console.time('Thread idle');
fs.stat(dirPath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, (err) => {
      next();
    });
  }
  next();
});
console.timeEnd('Thread idle');

function next() {
  // Callback Hell, Pyramid of Doom
  log(filePath, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log(filePath, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(filePath, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(filePath, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(filePath, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('Logs Done');
          });
        });
      });
    });
  });
}

