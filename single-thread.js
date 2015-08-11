"use strinct";

function singleThread(){
	
	/*En la posición 0 siemrpe esta el archivo donde esta Node.js, 
	el la posicion 1 esta el archivo que ejecuta Node.js 
	y podemos incluir más indices en el array.
	*/
	process.argv[2] = "Estamos aprendiendo Node.js";
	process.argv[4] = true;
	process.argv[6] = 2015;

	console.log("-------------------------------------");
	console.log("       EL PROCESO DE NODE.JS         ");
	console.log("Id del proceso ......." + process.pid);
	console.log("Titulo .............." + process.title);
	console.log("Directorio de Node" + process.execPath);
	console.log("Directorio actual...." + process.cwd());
	console.log("Version de Node....." + process.version);
	console.log("Versiones de dependencias"+process.versions);
	console.log("Sistema Operativo.." + process.platform);
	console.log("Architectura del S.O." + process.arch);
	console.log("Tiempo activo de Node.JS" + process.uptime());
	console.log("argumentos del proceso" + process.argv);
}

singleThread();
