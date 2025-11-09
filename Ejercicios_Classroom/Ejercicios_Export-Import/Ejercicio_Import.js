
// 4. Importa una función

import {saludar} from "./Ejercicio_Export.js";

saludar()

// 5. Importa una constante

import {PI} from "./Ejercicio_Export.js";

console.log(PI);

// 6. Importa una clase

import {Persona} from "./Ejercicio_Export.js";

let p1 = new Persona("Pepe",21)

console.log(p1);

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import User from "./Ejercicio_Export.js";

let u = new User("Pepe",32)
console.log(u);

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { sumar } from "./Ejercicio_Export.js";

console.log(sumar(1,2));
console.log(sumar("hola",2));