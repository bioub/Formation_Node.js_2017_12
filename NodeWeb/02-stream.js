const { createReadStream } = require('fs');

const rs = createReadStream('.editorconfig');

// cat .editorconfig | echo
// rs.pipe(process.stdout);
process.stdin.pipe(process.stdout);
