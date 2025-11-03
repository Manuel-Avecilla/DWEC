// =======================
//      Nivel Básico
// =======================

// 11. Creación y manipulación
// Crea un Map llamado 'usuariosOnline'.
// Asocia la clave 'user1' al valor 'Ana' y la clave 'user2' al valor 'Pedro' usando set().
// Obtén y muestra el nombre asociado a 'user1' usando get().

let usuariosOnline = new Map()

usuariosOnline.set('user1', 'Ana')
usuariosOnline.set('user2', 'Pedro')

console.table(usuariosOnline)

// 12. Tamaño y existencia
// Imprime el número de usuarios online con la propiedad size.
// Verifica si existe el usuario 'user3' usando has().

console.log(usuariosOnline.size);
console.log(usuariosOnline.has('user3'));

// =======================
//    Nivel Intermedio
// =======================

// 13. Iteración y Tipos de Clave
// Itera sobre 'usuariosOnline' usando el método entries() e imprime cada par [clave, valor].

for (let [key, value] of usuariosOnline.entries()) {
    console.log(`[clave: ${key} | valor: ${value}]`);
}

// 14. Clave de objeto
// Crea un objeto: admin = {id: 99}.
// Usa este objeto 'admin' como clave en un nuevo Map llamado 'roles' y asígnale el valor 'Administrador'.
// Muestra el valor que se obtiene al buscar con la clave 'admin'.

let admin = {id: 99}

let roles = new Map()
roles.set(admin,'Administrador')
console.table(roles);

// =======================
//     Nivel Avanzado
// =======================

// 15. Simulación de caché
// Diseña una función 'obtenerConfiguracion(clave)' que use un Map para cachear los resultados.
// Si la clave ya está en el Map, devuelve el valor cacheado (simula un acceso rápido).
// Si no está, simula una "consulta lenta" (p. ej., console.log('Consultando API...')) 
// y guarda el resultado en el Map antes de devolverlo.

const cache =  new Map()
cache.set(1,'hola')
cache.set(2,'adios')

function obtenerConfiguracion(clave) {
    if (cache.has(clave)){
        return cache.get(clave)
    } else {
        console.log('Consultando API...')
        cache.set(clave,'valor')
        return cache.get(clave)
    }
}

console.log(obtenerConfiguracion(1));
console.log(obtenerConfiguracion(3));