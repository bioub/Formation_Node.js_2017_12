const { createServer } = require('http');
const app = require('./app');

const server = createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(1234, () => {
  console.log('Server started on port 1234');
});
