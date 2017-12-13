const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');
const argv = require('minimist')(process.argv);

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function resetDist() {
  await del(distPath);
  console.log('dist removed');
  await fs.mkdir(distPath);
  console.log('dist created');
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = '';

  for (let b of buffers) {
    content += b.toString();
  }

  if (argv.minify) {
    content = UglifyJS.minify(content).code;
  }

  await fs.appendFile(appJsDistPath, content);
}

async function buildHtml() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();

  content = content.replace('<script src="./js/horloge.js"></script>', '');
  content = content.replace(
    '<script src="./js/index.js"></script>',
    '<script src="./app.js"></script>',
  );

  await fs.appendFile(indexHtmlDistPath, content);
}

async function build() {
  try {
    console.time('Build done');
    await resetDist();
    await Promise.all([
      buildJs(),
      buildHtml(),
    ]);
    console.timeEnd('Build done');
  }
  catch (err) {
    console.log(err.message);
  }
}

build();

