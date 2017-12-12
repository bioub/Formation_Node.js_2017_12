// 1 - Method properties
const random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline'); // lib/readline.js

// 2 - class
const Jeu = function(options) {
  // 3 - default param
  options = options || {};

  // 4 - destructer options avec des valeurs par défaut
  const min = options.min || 0;
  const max = (options.max !== undefined) ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this.entierAlea = random.getIntInclusive(min, max);
  this.essais = [];
};

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // 5 - template string
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = Number.parseInt(answer);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné !!!');
    this._rl.close();

  });
};

const jeu = new Jeu({
  min: 10,
  max: 20,
});
jeu.jouer();
