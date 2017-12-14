const { EventEmitter } = require('events');

const ee = new EventEmitter();

function createUser(prenom) {
  // TODO insérer dans la base de données
  ee.emit('user.created', prenom);
}

ee.on('user.created', (prenom) => {
  // TODO envoyer un mail à cet utilisateur
  console.log('on user.created', prenom);
});

createUser('Jean');
createUser('Eric');

