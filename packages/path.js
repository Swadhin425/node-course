const path= require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename))

console.log(path.parse(__filename))
console.log(path.join(path.dirname(__dirname),"public","index.txt"))

