// if/else/else if/ternaria
let texto = "hola"

if (texto == "hola") {
    console.log("hola");
} else {
    console.log("adios");
}

console.log(texto=="hola" ? "hola":"adios")

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log(texto=="manuel" ? "manuel":"")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user_1 = "Paco"
let p_user_1 = "1234"

let user_2 = "Pepe"
let p_user_2 = "0000"

let user_3 = "Juan"
let p_user_3 = "1111"

let usuario = ""
let contraseña = ""

if (usuario == user_1 && contraseña == p_user_1) {
    console.log("Acceso a Usuario 1");
} else if (usuario == user_2 && contraseña == p_user_2) {
    console.log("Acceso a Usuario 2");
} else if (usuario == user_3 && contraseña == p_user_3) {
    console.log("Acceso a Usuario 3");
} else {
    console.log("Acceso a Denegado");
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 0

if (num == 0) {
    console.log("El numero es cero");
} else if (num < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es positivo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 24

if (edad < 18) {
    console.log("No puede votar");
} else {
    console.log("Puede votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let valor = edad>18 ? "adulto":"menor"
console.log(valor);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "marzo";
mes = mes.toLowerCase();

switch (mes) {
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Primavera");
        break;

    case "junio":
    case "julio":
    case "agosto":
        console.log("Verano");
        break;

    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Otoño");
        break;

    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno");
        break;

    default:
        console.log("ERROR: Mes incorrecto");
        break;
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
mes = "marzo";
mes = mes.toLowerCase();

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log(31);
        break;

    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(30);
        break;

    case "febrero":
        console.log(28);
        break;

    default:
        console.log("ERROR: Mes incorrecto");
        break;
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español";
let saludo = "";

switch (idioma.toLowerCase()) {
    case "español":
    case "es":
        saludo = "Hola";
        break;

    case "ingles":
    case "en":
        saludo = "Hello";
        break;

    case "frances":
    case "fr":
        saludo = "Bonjour";
        break;

    default:
        console.log("ERROR: Idioma no detectado");
        break;
}

console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
// 10. Usa un switch para hacer de nuevo el ejercicio 7

//11. funcion ToDate
