// On manipule des objets existants en JS
console.log(typeof Math); // object (Langage)
console.log(typeof console); // object (Node & Navigateur)
console.log(typeof process); // object (Node)

// PI est une propriété (variable de l'objet)
console.log(Math.PI);

// random est une méthode (fonction de l'objet)
console.log(Math.random());

// Pour accéder au contenu, 2 opérateurs
// .
console.log(Math.PI);
// []
const prop = 'PI'
console['log'](Math[prop]);

// Les objets sont sont extensibles
console.log('Math.sum', Math.sum); // undefined

// On peut ajouter des clés/valeurs
// (attention, mauvaise pratique d'étendre les objets du langage)
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// On peut modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log("Math.sum('1', '2')", Math.sum('1', '2')); // 3

// On peut supprimer des clés/valeurs
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// Rendre pileOuFace prédictif (utile pour les tests)
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
const backupRandom = Math.random;
Math.random = () => 0.25;
console.log(pileOuFace()); // face
Math.random = () => 0.75;
console.log(pileOuFace()); // pile
Math.random = backupRandom;

// 3 cas de création d'objet

// 1 - objet avec que des propriétés (très simple à créer)
// soit contenant les méthodes mais instanciés une seule fois

// syntaxe object literal
const coords2d = {
  x: 10,
  y: 20,
};

// On pourrait l'étendre
// coords2d.z = 30;

const myMath = {
  sum: (a, b) => Number(a) + Number(b)
};

// 2 - un objet complexe à créer (sans méthodes)

const coordsFactory = (_x, _y, _z) => {
  if (_x === undefined) {
    _x = 0;
  }
  if (_y === undefined) {
    _y = 0;
  }
  if (_z === undefined) {
    _z = 0;
  }
  return {
    x: _x,
    y: _y,
    z: _z,
  }
};

const coordsFactoryES6 = (x = 0, y = 0, z = 0) => ({x, y, z});

const coords3dFromFactory = coordsFactory(10, 20);
console.log(coords3dFromFactory.x); // 10
console.log(coords3dFromFactory.z); // 0

// 3 - Objets multi-instanciés avec des méthodes

// fonction constructeur (fonction appelée avec new)
const Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain.hello()); // Bonjour je m'appelle Romain

const eric = new Contact('Eric');
console.log(romain.hello === eric.hello); // true
