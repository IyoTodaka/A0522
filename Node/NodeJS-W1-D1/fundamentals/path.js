const path = require('path')

console.log(__filename);
console.log(__dirname);
console.log('basename --->', path.basename(__filename))
console.log('directory --->', path.dirname(__filename))
console.log('extension --->', path.extname(__filename));

//MIME
console.log(path.join(__dirname, 'asset'));