// 1. Crea un objeto con 3 propiedades
persona1 = {
    nombre : "pepe",
    apellido_1 : "ruiz",
}

// 2. Accede y muestra su valor
console.log(persona1.nombre);

// 3. Agrega una nueva propiedad

persona1.apellido_2 = "garcia";

// 4. Elimina una de las 3 primeras propiedades

delete persona1.apellido_1;

// 5. Agrega una función e invócala

persona1 = {
    nombre : "pepe",
    apellido_1 : "ruiz",
    apellido_2 : "garcia",

    saludar() {
        console.log("hola")
    }

}

persona1.saludar()

// 6. Itera las propiedades del objeto

for (let clave in persona1){
    console.log(clave, ":", persona1[clave]);
}

// 7. Crea un objeto anidado

carrito = {
    usuario : "pepe",
    id : "1234",
    camisa : {
        precio : 16,
        color : "rojo",
    }
    ,
    pantalon : {
        precio : 16,
        color : "azul",
    }
    
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(carrito.camisa);

// 9. Comprueba si los dos objetos creados son iguales

persona1 = {
    nombre : "pepe",
}
persona2 = {
    nombre : "pepe",
}

console.log(persona1==persona2);

// 10. Comprueba si dos propiedades diferentes son iguales

persona1 = {
    nombre : "pepe",
}
persona2 = {
    nombre : "pablo",
}

console.log(persona1.nombre==persona2.nombre);