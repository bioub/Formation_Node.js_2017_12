const { createServer } = require('net');

const server = createServer();

server.on('error', (err) => {
  console.log(err.message);
});

server.on('connection', (socket) => {
  socket.pipe(process.stdout)
  socket.write('HTTP/1.1 302 Found\r\n');
  socket.write('Location: http://www.google.fr/\r\n');
  socket.write('\r\n');
  socket.end();
});

server.listen(1234, () => {
  console.log('server started !!!');
});
