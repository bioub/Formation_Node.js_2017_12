const express = require('express');
const { createServer } = require('http');

const app = express();

const contacts = [{
  prenom: 'Romain',
  nom: 'Bohdanowicz',
  id: 123
}]

// Route: association entre une requete (Method + URL) et une fonction
app.get('/', (req, res, next) => {;
  res.send('Bonjour');
});

app.get('/hello/:prenom', (req, res, next) => {
  res.send(`Bonjour ${req.params.prenom}`);
});

app.get('/redirect', (req, res, next) => {
  res.redirect('https://www.google.fr/');
});

app.get('/api/contacts', (req, res, next) => {
  res.json(contacts);
});

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send('<h2>Not Found</h2>');
});

const server = createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(1234, () => {
  console.log('Server started on port 1234');
});
