// 1. Crea un array que almacene cinco animales
let array1 = ["perro","gato","pez","caballo","conejo"]

// 2. Añade dos más. Uno al principio y otro al final
array1.push("jirafa")
array1.unshift("leon")

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);

// 4. Crea un set que almacene cinco libros
let set1 = new Set(["1984", "El Hobbit", "Cien años de soledad", "Don Quijote", "La Odisea"])

// 5. Añade dos más. Uno de ellos repetido
set1.add("Harry Potter");
set1.add("1984")
console.log(set1);

// 6. Elimina uno concreto a tu elección
set1.delete("1984")
console.log(set1);

// 7. Crea un mapa que asocie el número del mes a su nombre
let map1 = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (map1.has(5)){
    console.log(map1.get(5));
} else {
    console.log("El mes no existe");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
map1.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(map1.get("verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = [1,2,3,4,5,5,6,6,7]
let set2 = new Set(array2)
let map2 = new Map()
map2.set("numeros", set2)
console.log(map2);

// Array
// push(valor)      → Añade un elemento al final del array
// unshift(valor)   → Añade un elemento al inicio del array
// splice(i, n)     → Elimina 'n' elementos desde el índice 'i'

// Set
// new Set(array)   → Crea un conjunto único de elementos (sin duplicados)
// add(valor)       → Añade un valor al Set
// delete(valor)    → Elimina un valor del Set

// Map
// new Map()        → Crea un mapa clave → valor
// set(clave, valor) → Añade o actualiza un par clave → valor
// get(clave)       → Obtiene el valor de la clave
// has(clave)       → Comprueba si existe la clave en el Map