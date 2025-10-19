function pedirNumero(mensaje) {
    let num;
    let esValido;

    do {
        esValido = true;

        num = parseFloat(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false;
        } else if (num < 0 && num !== -1) {
            alert("El valor introducido debe ser positivo.");
            esValido = false;
        }

    } while (!esValido);

    return num;
}

const numeros = [];
let suma = 0;
let numero;

do {
    numero = pedirNumero("Introduce numeros positivos (-1 para terminar): ");
    if (numero !== -1) {
        numeros.push(numero);
        suma += numero;
    }
} while (numero !== -1);

let texto = "";
if (numeros.length > 0) {
    numeros.sort();

    texto += `Numeros introducidos: ${numeros.toString()}\n`;
    texto += `Numero menor: ${numeros[0]}\n`;
    texto += `Numero mayor: ${numeros[numeros.length - 1]}\n`;
    texto += `Media: ${(suma / numeros.length).toFixed(2)}\n`;
    
} else {
    texto = "No se introdujeron numeros.";
}

alert(texto);



