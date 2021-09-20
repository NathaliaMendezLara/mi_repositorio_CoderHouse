//ejemplo uno
var  nombreVisitante;

var mensaje= "Estas por acceder a la consola"

console.log(mensaje);


nombreVisitante =prompt("por favor ingresa tu nombre");

console.log("Estas dentro de la consola! "+ " " + nombreVisitante);

//ejemplo dos

let pedirNumero;

let numeroElegido= 23; 

let sumatoria;

pedirNumero =prompt("por favor ingresa un numero");

pedirNumero =parseInt(pedirNumero, Int32Array);

sumatoria= numeroElegido + pedirNumero;

console.log("resultado:" + sumatoria);

//Ejemplo tres

var ingresaUnColor;

var ingresaUnTipoDeFlor;

ingresaUnColor =prompt("Escribe el color que te gusta");

ingresaUnTipoDeFlor =prompt("Escribe la flor que te guste o conozcas");

console.log("la frase formada es:" + "" + ingresaUnColor +"" + ingresaUnTipoDeFlor);

alert("la frase formada es:" + "" + ingresaUnTipoDeFlor +"" + ingresaUnColor);



