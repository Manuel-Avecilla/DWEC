// =======================
//      Nivel Básico
// =======================

// 1. Declaración e Inicialización
// Crea un array 'meses' con los nombres de los 12 meses.
// Imprime el mes en la posición 5 (recuerda que los índices empiezan en 0).

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(meses[5]);

// 2. Manipulación Extrema
// Añade 'Diciembre Bis' al final de 'meses'.
// Elimina 'Enero' del principio.
// Muestra el array final.

meses.push("Diciembre Bis")
meses.shift()
console.log(meses);

// =======================
//    Nivel Intermedio
// =======================

// 3. Búsqueda y Posición
// Dado un array ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla']
// Pide al usuario que introduzca una ciudad y usa indexOf() para indicar su posición.
// Si la ciudad no está, informa de ello.

let ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla']

ciudad = "Sevilla" // Entrada

if (ciudades.indexOf(ciudad)!== -1){
    console.log(`${ciudad} en la posicion: ${ciudades.indexOf(ciudad)}`);
} else {
    console.log(`${ciudad} no encontrada`);
}

// 4. Transformación con map()
// Dado un array productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}]
// Usa map() para crear un nuevo array 'nombresProductos' que contenga solo los nombres.

let productos = [
    {nombre: 'Portátil', precio: 1200},
    {nombre: 'Ratón', precio: 25},
    {nombre: 'Monitor', precio: 300}
]

let nombresProductos = productos.map(producto => producto.nombre)

console.log(nombresProductos)

// 5. Filtrado con filter()
// Basándote en el array productos anterior
// Usa filter() para crear un array 'productosCaros' que solo contenga productos con precio > 100.

let productosCaros = productos.filter(producto => producto.precio > 100)

console.table(productosCaros)

// 6. Composición con reduce()
// Usa reduce() para calcular la suma total de los precios de todos los productos en el array productos.

let suma = productos.reduce((ac , producto) => ac + producto.precio,0)
let media = suma / productos.length
console.log(media.toFixed(2))

// =======================
//     Nivel Avanzado
// =======================

// 7. Concatenación y Ordenación
// Crea dos arrays: frontend = ['HTML', 'CSS'] y backend = ['Node', 'SQL']
// Concaténalos usando el operador spread (...) en un array 'stackCompleto'
// Añade 'JavaScript' y luego ordena alfabéticamente el array final

let frontend = ['HTML', 'CSS']
let backend = ['Node', 'SQL']

let stackCompleto = [...frontend, ...backend];
stackCompleto.push("JavaScript")
stackCompleto.sort() // Ordena Alfabeticamente
console.log(stackCompleto);

// 8. Matrices 2D y Desestructuración
// Crea una matriz (array de arrays) tablero = [['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'o', 'x']]
// Imprime el elemento central ('x')
// Desestructura el primer array para obtener solo los dos primeros elementos en variables separadas

let tablero = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
]
console.log(tablero[1][1]);
primerElemento = tablero[0][0]
segundoElemento = tablero[0][1]

// 9. find() y Objetos Complejos
// En el array productos, usa find() para localizar y mostrar el objeto completo del producto con el nombre 'Portátil'

let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() == "portátil")

console.log(productoEncontrado);

// 10. Creación de una Función Universal
// Escribe una función procesarNotas(listaNotas) que reciba un array de notas (números)
// Debe devolver un objeto con tres propiedades:
// - media (usando reduce)
// - aprobados (usando filter)
// - notas10 (usando includes para verificar si alguien tiene un 10)

function procesarNotas(listaNotas) {

    let sum = listaNotas.reduce((ac, nota) => ac + nota ,0)
    let media = sum/listaNotas.length
    let aprobados = listaNotas.filter(nota => nota < 5)
    let notas10 = listaNotas.includes(10)

    console.log(`Media: ${media} Aprobados: ${aprobados} Notas10: ${notas10}`);
}

procesarNotas([2,3,4,6,7,8,10])

