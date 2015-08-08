var fs = require('fs'); 

console.log('\n Abriendo archivo...');

var content = fs.readFileSync('archivo.txt', 'utf8'); 

console.log(content);

console.log('\n Haciendo otra cosa....'); 

console.log(process.uptime()); //0.67 ms tarda en ejecutar. 
