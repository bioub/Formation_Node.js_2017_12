function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while (debut + delay > Date.now()) {}

  cb();
}

setTimeoutSync(() => {
  console.log('Hello dans 1s');
}, 1000);

setTimeoutSync(() => {
  console.log('Hello 1s après');
}, 1000);

const nbs = [2, 3, 4];

// Depuis ES5 (IE9+)
nbs
  .filter(nb => nb % 2 === 0)
  .map(nb => nb * nb)
  .forEach((nb, i) => {
    console.log('elt', nb, 'i', i);
  });

// acc: 0 + nb: 2 = return 2
// acc: 2 + nb: 3 = return 5
// acc: 5 + nb: 4 = return 9
const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log('sum', sum); // 9

console.log('fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |cl('hello')    cl('hello')    cl cl cl
// |cb             cb             cb-cb-cb
// |setTimeoutSync-setTimeoutSync-forEach  - cl('fin')
// +------------------------------------> temps

// hello
// elt 2 i 0
// elt 3 i 1
// elt 4 i 2
// fin
