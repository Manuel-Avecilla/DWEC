// 1. Crea un función que utilice error correctamente
console.error("ERROR")

// 2. Crea una función que utilice warn correctamente

console.warn("Aviso")

// 3. Crea una función que utilice info correctamente

console.info("Info")

// 4. Utiliza table

const persona = {
    nombre : "Pepe",
    apellido : "Ruiz"
}
console.table(persona);

// 5. Utiliza group
console.group("Persona")
console.log("Nombre: "+persona.nombre)
console.log("Apellido: "+persona.apellido)
console.groupEnd()

// 6. Utiliza time
console.time("Ejecución 1")
for (let index = 0; index < 999999999; index++) {
}
console.timeEnd("Ejecución 1")

// 7. Valida con assert si un número es positivo

let nombre = "Pepe"
console.assert(nombre == "Juan", "Su nombre no es Juan")

// 8. Utiliza count
console.count("Click")
console.count("Click")
console.count("Boton")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Utiliza trace

function foo() {
    function bar() {
        console.trace("Recorrido");
    }
    bar();
}

foo();

// 10. Utiliza clear

console.clear();