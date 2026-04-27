const fecha_nacimiento = new Date("2005-10-31");
const anioActual = new Date().getFullYear();

let sueldoBase = 1000;
let aumento = 100;

let añosTrabajados = anioActual - fecha_nacimiento.getFullYear();

let aumentosRecibidos = Math.floor(añosTrabajados / 3);
let sueldoFinal = sueldoBase + (aumentosRecibidos * aumento);

console.log("El sueldo final es: " + sueldoFinal + " euros.");
