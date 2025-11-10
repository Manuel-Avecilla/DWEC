const empleados = ["Ana", "Luis", "Ana", "Carlos", "Luis", "Marta", "Ana","Luis","Luis","Luis"];

let empleadosSet = new Set(empleados)
console.log(empleadosSet)


const empleadosMap = new Map()
for (value of empleados) {
    if (empleadosMap.has(value)){
        empleadosMap.set(value, empleadosMap.get(value)+1)
    } else {
        empleadosMap.set(value, 1)
    }
}
console.table(empleadosMap);

let empleadosArrayObjetos = new Array()
for (let [key, value] of empleadosMap.entries()) {
    empleadosArrayObjetos.push({nombre : key, veces : value})
}
console.log(empleadosArrayObjetos);

empleadosArrayObjetos = empleadosArrayObjetos.map((empleado)=>empleado.veces).sort().reverse()

console.log(empleadosArrayObjetos);

// SOLUCION
/*
const empleados = ["Ana", "Luis", "Ana", "Carlos", "Luis", "Marta", "Ana","Luis","Luis","Luis"];

// 1. Eliminar duplicados
const empleadosSet = new Set(empleados);
console.info("Empleados únicos:");
console.table(Array.from(empleadosSet));

// 2. Contar frecuencias con Map
const empleadosMap = new Map();
for (const value of empleados) {
    if (empleadosMap.has(value)) {
        empleadosMap.set(value, empleadosMap.get(value) + 1);
    } else {
        empleadosMap.set(value, 1);
    }
}

// 3. Mostrar tabla del Map (convertido a array para que console.table funcione bien)
console.info("Frecuencia de empleados:");
console.table(Array.from(empleadosMap, ([nombre, veces]) => ({ nombre, veces })));

// 4. Convertir el Map a un array de objetos
let empleadosArrayObjetos = Array.from(empleadosMap, ([nombre, veces]) => ({ nombre, veces }));

// 5. Ordenar por número de apariciones (de mayor a menor)
empleadosArrayObjetos.sort((a, b) => b.veces - a.veces);

// 6. Mostrar resultado final
console.info("Empleados ordenados por frecuencia:");
console.table(empleadosArrayObjetos);

*/