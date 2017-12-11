function externe(msg) {
  // Closure : portée sauvegardée
  // 2 conditions :
  // 1. 2 fonctions imbriquées (ou une fonction dans un bloc depuis ES6)
  // 2. la fonction interne peut être appelée plus tard (return, callback async, objet)

  function interne() {
    console.log('closure : ', msg);
  }

  return interne;
}

const hello = externe('Hello');
const bye = externe('Bye');
console.log(typeof hello); // function

hello();

// Dans 1s 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log('setTimeout 0 : ', i);
  }, 0);
}

// Dans 1s 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log('setTimeout 1000 : ', i);
  }, 1000);
}

// Dans 1s 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(() => {
    console.log('let 1000 : ', i);
  }, 1000);
}


/*
function createButton(val) {

  const btn = document.createElement('button');
  btn.innerText = val; // <button>val ici</button>
  btn.addEventListener('click', () => { // callback async
    // val est dans la portée de closure
    console.log(val);
  });

}
*/
