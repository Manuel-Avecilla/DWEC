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
let numeroBinario = ""
let text = ""

while (numero>0) {
    text += numero%2
    numero = Math.trunc(numero/2)
}

for (let i = text.length; i >= 0; i--) {
    numeroBinario += text.charAt(i)
}

alert(`El numero ${text_numero} en binario es ${numeroBinario}`)
