// =======================
//      Nivel Básico
// =======================

// 7. Creación y adición
// Crea un Set llamado 'tagsUnicos'.
// Añade los tags "DAW", "JavaScript", "HTML" y "DAW" (sí, repítelo).
// Imprime el Set y su propiedad size para comprobar que "DAW" solo aparece una vez.

let tagsUnicos = new Set()
tagsUnicos.add("DAW")
tagsUnicos.add("JavaScript")
tagsUnicos.add("HTML")
tagsUnicos.add("DAW")

console.table(tagsUnicos)
console.log(`size: ${tagsUnicos.size}`);

// 8. Métodos esenciales
// Verifica si el tag "CSS" existe en 'tagsUnicos' usando has().
// Elimina el tag "HTML" usando delete().

let isExist = tagsUnicos.has("CSS")
console.log(isExist);

tagsUnicos.delete("HTML")
console.table(tagsUnicos)

// =======================
//    Nivel Intermedio
// =======================

// 9. Conversión y uso
// Dado un array con valores repetidos:
// colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul']
// Crea un nuevo array sin duplicados usando new Set() y el operador spread (...).

let colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul']

let colores2 = new Set(colores)

console.table(colores2)

// =======================
//     Nivel Avanzado
// =======================

// 10. Operaciones de Conjuntos
// Define dos Sets:
// frontend = new Set(['HTML', 'CSS', 'JS'])
// backend = new Set(['JS', 'Node', 'SQL'])
// Escribe código para encontrar los elementos que están en ambos Sets (la intersección).


let frontend = new Set(['HTML', 'CSS', 'JS'])
let backend = new Set(['JS', 'Node', 'SQL'])

// let interseccion = new Set()
// for (valorSet1 of frontend) {
//     for (valorSet2 of backend) {
//         if (valorSet1 == valorSet2) {
//             interseccion.add(valorSet1)
//         }
//     }
// }

let interseccion = new Set([...frontend].filter(tech => backend.has(tech)));

console.log(interseccion);