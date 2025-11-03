// =======================
//      Nivel Básico
// =======================

// 1. Creación y Establecimiento
// Crea un Map llamado 'traducciones'.
// Asocia la clave 'hello' al valor 'hola' y 'bye' al valor 'adiós' usando set().

let traducciones = new Map()

traducciones.set('hello','hola')
traducciones.set('bye','adiós')

console.table(traducciones)

// 2. Obtención y Tamaño
// Usa get() para obtener el valor asociado a 'hello'.
// Imprime el tamaño del Map con size.

console.log(traducciones.get('hello'))
console.log(traducciones.size);

// =======================
//    Nivel Intermedio
// =======================

// 3. Clave de Número
// Añade una nueva entrada donde la clave sea un número (1) y el valor sea 'Primer Nivel'.
// Demuestra que puedes acceder a ella con get(1).

traducciones.set(1,'Primer Nivel')
console.log(traducciones.get(1));

// 4. Clave de Objeto
// Crea un objeto: config = {version: 1.0}
// Usa este objeto 'config' como clave en 'traducciones' y asocia el valor 'Configuración Global'.
// Muestra el valor que obtienes al buscar con la clave 'config'.

let config = {version: 1.0}
traducciones.set(config,'Configuración Global')
console.log(traducciones.get(config));

// 5. Iteración de Claves
// Utiliza el método keys() junto con un bucle for...of para imprimir solo las claves del Map.

for (key of traducciones.keys()) {
    console.log(key);
}

// 6. Iteración de Pares
// Utiliza el método entries() para recorrer el Map e imprimir cada par en el formato:
// Clave: [clave], Valor: [valor]

for (let [key, value] of traducciones.entries()) {
    console.log(`Clave: [${key}], Valor: [${value}]`);
}

// =======================
//     Nivel Avanzado
// =======================

// 7. Búsqueda Condicional
// Escribe una función 'buscarTraduccion(clave)' que busque la clave en 'traducciones'.
// Si la encuentra, devuelve el valor; si no, devuelve 'Traducción no disponible'.

function buscarTraduccion(clave){
    if (traducciones.has(clave)){
        return traducciones.get(clave)
    } else {
        return 'Traducción no disponible'
    }
}
console.log(buscarTraduccion('hello'));

// 8. Conversión bidireccional
// Convierte el Map 'traducciones' a un Array de Pares usando el operador spread (...).
// Luego, crea un nuevo Map a partir de ese Array.

let arrayDePares = [...traducciones]
console.log(arrayDePares);

let nuevoMap = new Map(arrayDePares);
console.table(nuevoMap);


// 9. Map como Contador de Frecuencia
// Dado un array de palabras:
// frase = ['a', 'b', 'a', 'c', 'b', 'a']
// Usa un Map para contar la frecuencia de cada palabra y almacena el resultado como:
// {'a': 3, 'b': 2, 'c': 1} (clave = palabra, valor = cuenta)

let frase = ['a', 'b', 'a', 'c', 'b', 'a']
let frecuencia = new Map()

for (value of frase) {
    if (frecuencia.has(value)){
        frecuencia.set(value, frecuencia.get(value)+1)
    } else {
        frecuencia.set(value, 1)
    }
}

console.log(frecuencia);


// 10. Simulación de Base de Datos
// Crea una clase 'DBManager' con un Map privado para almacenar datos.
// Implementa los métodos:
// - guardar(id, dato)
// - obtener(id)
// - eliminar(id)
// Asegúrate de que los métodos manejen el caso de que el id no exista, devolviendo null o un mensaje apropiado.


class DBManager {
    #datos = new Map();
    guardar(id, dato) {
        return this.#datos.set(id, dato);
    }
    obtener(id) {
        if (this.#datos.has(id)){
            return this.#datos.get(id);
        } else {
            console.log('Id no encontrado');
            return null
        }
    }
    eliminar(id) {
        if (this.#datos.has(id)){
            return this.#datos.delete(id);
        } else {
            console.log('Id no encontrado');
            return null
        }
    }
}

const db = new DBManager();

db.guardar(1, 'Juan');
db.guardar(2, 'Ana');

console.log(db.obtener(1));
db.eliminar(1);
console.log(db.obtener(1));
