function pedirNumero(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseFloat(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }

    } while (!esValido);
    return num
}

const numero = pedirNumero("Introduce un numero")

alert("El valor absoluto del numero es: "+Math.abs(numero))