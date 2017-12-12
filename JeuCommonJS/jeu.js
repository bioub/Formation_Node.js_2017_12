const readline = require('readline'); // lib/readline.js
const random = require('./random');

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

module.exports = Jeu;
