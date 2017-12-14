const { createServer } = require('http');

const server = createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain'); // MIME Type
      res.write('Bonjour');
      res.end();
      break;
    case '/redirect':
      res.statusCode = 302;
      res.setHeader('Location', 'https://www.google.fr/');
      res.end();
    break;
    case '/api/contacts':
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json'); // MIME Type
      res.write(JSON.stringify([{prenom: 'Romain'}, {prenom: 'Jean'}]));
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html'); // MIME Type
      res.write('<h2 style="color: red">Not Found</h2>');
      res.end();
  }
});

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(1234, () => {
  console.log('Server started on port 1234');
});
