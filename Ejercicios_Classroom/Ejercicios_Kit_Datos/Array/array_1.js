// =======================
//      Nivel Básico
// =======================

// 1. Declaración y acceso
// Crea un array 'peliculas' con 5 títulos.
// Accede e imprime el título de la segunda película.

let peliculas = ["Titulo 1","Titulo 2","Titulo 3","Titulo 4","Titulo 5"]
console.log(peliculas[1]);

// 2. Modificación básica
// Añade un nuevo título al final de 'peliculas' usando push().
// Elimina el primer elemento usando shift().

peliculas.push("Titulo nuevo")
peliculas.shift()
console.log(peliculas);

// =======================
//    Nivel Intermedio
// =======================

// 3. Iteración y búsqueda
// Utiliza un bucle for...of o forEach() para imprimir todos los títulos.
// Luego, verifica si la película "Avatar" está en el array usando includes().

for (valor of peliculas){
    console.log(valor);
}
console.log(peliculas.includes("Avatar"));

// 4. Métodos funcionales
// Dado un array de números: notas = [7, 8.5, 5, 9, 6.5]
// Usa map() para crear un nuevo array con las notas redondeadas al entero superior (Math.ceil).
// Usa filter() para obtener solo las notas aprobadas (>= 5).

let notas = [7, 8.5, 5, 9, 6.5, 3.5, 4.4, 5]
let notasR = notas.map(nota => Math.ceil(nota))
let notasA = notasR.filter(nota => nota >= 5)

console.log(notasR);
console.log(notasA);

// =======================
//     Nivel Avanzado
// =======================

// 5. Reducción y Objetos
// Usa reduce() para calcular la nota media de las notas.

let suma = notasR.reduce((acumulador, nota) => acumulador + nota, 0)
let media = suma / notasR.length
console.log(media); 

// 6. Array de Objetos
// Dado un array de objetos:
// alumnos = [{nombre: 'Ana', edad: 20}, {nombre: 'Luis', edad: 22}]
// Usa map() para obtener un array solo con los nombres.
// Usa filter() para obtener solo los alumnos mayores de 21 años.

let alumnos = [{nombre: 'Ana', edad: 20}, {nombre: 'Luis', edad: 22}]
let nombreAlumnos = alumnos.map(alumno => alumno.nombre)
let alumnosMayores = alumnos.filter(alumno => alumno.edad > 21)

console.log(nombreAlumnos);
console.log(alumnosMayores);


// Array
// []                 → Crea un array
// array[index]       → Accede a un elemento por su índice
// push(valor)        → Añade un elemento al final del array
// unshift(valor)     → Añade un elemento al inicio del array
// shift()            → Elimina el primer elemento del array
// pop()              → Elimina el último elemento del array
// includes(valor)    → Comprueba si un valor existe en el array (devuelve true/false)
// for...of           → Itera sobre los elementos de un array
// for...in           → Itera sobre los índices de un array

// Métodos funcionales de Array
// map(func)          → Crea un nuevo array aplicando 'func' a cada elemento
// filter(func)       → Crea un nuevo array con los elementos que cumplen la condición de 'func'
// reduce(func, inicial) → Reduce el array a un único valor usando 'func' y un valor inicial

// Array de objetos
// array.map(obj => obj.propiedad)    → extrae una propiedad de cada objeto en un nuevo array
// array.filter(obj => condición)     → filtra objetos según una condición