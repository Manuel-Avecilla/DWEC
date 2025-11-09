// 1. Exporta una función

export function saludar(){
    console.log("Hola");
}

// 2. Exporta una constante

export const PI = Math.PI

// 3. Exporta una clase

export class Persona {
    constructor(nombre="Desconocido", edad=0){
        this.nombre = nombre
        this.edad = edad
    }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// Solo puede haber un export default por archivo.
export default class User {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

// 9. Exporta una función, una constante y una clase desde una carpeta

export { sumar } from "./sumar.js"