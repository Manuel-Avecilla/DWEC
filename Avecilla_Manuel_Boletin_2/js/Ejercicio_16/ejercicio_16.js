function pedirNumero(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseInt(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }

        if (num < 0) {
            alert("El valor tiene que se positivo.")
            esValido = false
        }

    } while (!esValido);
    return num
}

let numero = pedirNumero("Introduce un numero")
let text_numero = numero
let binario = ""

while (numero>0) {
    binario = (numero%2) + "" + binario
    numero = Math.trunc(numero/2)
}

alert(`El numero ${text_numero} en binario es ${binario}`)

alert(text_numero.toString(2))