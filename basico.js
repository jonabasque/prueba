"use strict";

console.log("Hola mundo desde Node.js, esto se verá en la terminal de comandos");
console.log(2+5);
console.log(global); // Es el contexto global en lugar de window en el navegador

setInterval(function(){
	console.log("hola");
},1000 );
