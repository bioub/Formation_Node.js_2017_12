function avecCallback(cb) {
  // TODO faire un traitement
  cb();
}

avecCallback(() => {
  console.log('Hello');
});

const nbs = [2, 3, 4];

nbs.forEach((elt, i) => {
  console.log('elt', elt, 'i', i);
});

console.log('fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |cl('hello')  cl cl cl
// |cb           cb-cb-cb
// |avecCallback-forEach  - cl('fin')
// +------------------------------------> temps

// hello
// elt 2 i 0
// elt 3 i 1
// elt 4 i 2
// fin
