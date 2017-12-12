// module local (dans le projet) commence par ./ ou ../
const hello = require('../src/hello');
const assert = require('assert'); // binaire de node lib/assert.js

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain');
  console.log('OK');
}
catch (err) {
  console.log('Erreur');
}
