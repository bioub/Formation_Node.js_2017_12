const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline'); // lib/readline.js

class Jeu {
  constructor(options = {}) {

    const {min = 0, max = 100} = options

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
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
  }
}


const jeu = new Jeu({
  min: 10,
  max: 20,
});
jeu.jouer();
