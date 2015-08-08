var fs = require('fs'); 

console.log('\n Abriendo archivo...');

var content = fs.readFile('archivo.txt', 'utf8', function(error, content){ 

	//La funcion callback se ejecuta cuando se termina de leer el archivo. 
	console.log(content); 

});

console.log('\n Haciendo otra cosa....'); 

console.log(process.uptime()); //0.67 ms tarda en ejecutar. 
