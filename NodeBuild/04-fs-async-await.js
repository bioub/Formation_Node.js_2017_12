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

async function logs() {
  try {
    try {
      const stats = await fs.stat(dirPath);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(dirPath);
      }
      else {
        throw err;
      }
    }

    await log(filePath, 'Ligne 1');
    await log(filePath, 'Ligne 2');
    await log(filePath, 'Ligne 3');
    await log(filePath, 'Ligne 4');
    await log(filePath, 'Ligne 5');
    console.timeEnd('Logs Done');
  }
  catch (err) {
    console.log(err);
  }
}

logs();


console.timeEnd('Thread idle');
