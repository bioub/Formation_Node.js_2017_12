const { createConnection } = require('net');

const socket = createConnection(80, 'www.google.com');

socket.on('connect', () => {
  // GET: method (catégorie de requête)
  // GET => Lecture, POST => création, DELETE => supprimer
  // PUT => remplacement, PATCH => modifier partiellement
  // /: URL (Uniform Resource Locator)
  // identifiant de resource (quelque chose qu'on interroger)
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.com\r\n');
  socket.write('User-agent: Bot Node.js\r\n');
  socket.write('\r\n');
  socket.end();
});

socket.on('data', (buffer) => {
  const content = buffer.toString();
  console.log(content);
  /*
  HTTP/1.1 302 Found
  Cache-Control: private
  Content-Type: text/html; charset=UTF-8
  Referrer-Policy: no-referrer
  Location: http://www.google.fr/?gfe_rd=cr&dcr=0&ei=HTMxWtCjE7Tb8AewzYegBw
  Content-Length: 268
  Date: Wed, 13 Dec 2017 14:03:09 GMT

  <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
  <TITLE>302 Moved</TITLE></HEAD><BODY>
  <H1>302 Moved</H1>
  The document has moved
  <A HREF="http://www.google.fr/?gfe_rd=cr&amp;dcr=0&amp;ei=HTMxWtCjE7Tb8AewzYegBw">here</A>.
  </BODY></HTML>
  */
});
